const express = require('express');
const {
  S3Client,
  PutObjectCommand,
  CreateMultipartUploadCommand,
  AbortMultipartUploadCommand,
  UploadPartCommand,
  CompleteMultipartUploadCommand,
  AnalyticsExportDestination,
} = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const {
  MediaConvertClient,
  CreateJobCommand,
} = require('@aws-sdk/client-mediaconvert');
const uuid = require('uuid');
const config = require('config');
const axios = require('axios');

const auth = require('../middleware/auth');
let mediaConvertJobSettings = require('../config/media-convert-job-settings.json');
const io = require('../socket');

const router = express.Router();

const awsRegion = config.get('AWS_REGION');
const s3Client = new S3Client({ region: awsRegion });
const mediaConvertClient = new MediaConvertClient({
  region: awsRegion,
  endpoint: 'https://xnbzilj6c.mediaconvert.ap-south-1.amazonaws.com',
});

router.get('/watch/:id', (req, res, next) => {});

router.get('/get-multipart-upload-id', auth, async (req, res, next) => {
  const key = `${req.userId}/${uuid.v1()}.mp4`;
  const response = await s3Client.send(
    new CreateMultipartUploadCommand({
      Bucket: 'youtube-clone-58-videos',
      Key: key,
      ContentType: 'application/octet-stream',
    })
  );

  res.status(200).send(response);
});

router.post('/get-presigned-url', auth, async (req, res, next) => {
  let preSignedUrl;
  if (req.body.method === 'putObject') {
    const key = `${req.userId}/${uuid.v1()}.mp4`;
    preSignedUrl = await getSignedUrl(
      s3Client,
      new PutObjectCommand({
        Bucket: 'youtube-clone-58-videos',
        Key: key,
        ContentType: 'video/mp4',
      }),
      {
        expiresIn: 300,
      }
    );
  } else if (req.body.method === 'uploadPart') {
    preSignedUrl = await getSignedUrl(
      s3Client,
      new UploadPartCommand({
        Bucket: 'youtube-clone-58-videos',
        Body: req.body.chunk,
        Key: req.body.key,
        UploadId: req.body.uploadId,
        PartNumber: req.body.partNumber,
        ContentLength: req.body.contentLength,
      }),
      {
        expiresIn: 300,
      }
    );
  }

  res.status(200).send({ preSignedUrl });
});

router.post('/complete-multipart-upload', auth, async (req, res, next) => {
  s3Client.middlewareStack.add(
    (next, _context) => (args) => {
      if (
        'string' === typeof args.request?.body &&
        args.request.body.includes('CompletedMultipartUpload')
      ) {
        args.request.body = args.request.body.replace(
          /CompletedMultipartUpload/g,
          'CompleteMultipartUpload'
        );
      }
      return next(args);
    },
    {
      step: 'build',
      priority: 'high',
    }
  );

  const response = await s3Client.send(
    new CompleteMultipartUploadCommand({
      Bucket: 'youtube-clone-58-videos',
      Key: req.body.key,
      UploadId: req.body.uploadId,
      MultipartUpload: {
        Parts: req.body.parts,
      },
    })
  );

  res.status(200).send(response);
});

router.post('/abort-multipart-upload', auth, async (req, res, next) => {
  const response = await s3Client.send(
    new AbortMultipartUploadCommand({
      Bucket: 'youtube-clone-58-videos',
      Key: req.body.key,
      UploadId: req.body.uploadId,
    })
  );

  res.status(200).send(response);
});

router.post('/convert-media', auth, async (req, res, next) => {
  mediaConvertJobSettings.Inputs[0].FileInput = `s3://youtube-clone-58-videos/${req.body.key}`;
  mediaConvertJobSettings.OutputGroups[0].OutputGroupSettings.DashIsoGroupSettings.Destination = `s3://youtube-clone-58-converted-media/${req.body.key}/`;
  const response = await mediaConvertClient.send(
    new CreateJobCommand({
      AccelerationSettings: {
        Mode: 'DISABLED',
      },
      Priority: 0,
      Queue: 'arn:aws:mediaconvert:ap-south-1:306651331583:queues/Default',
      Role: 'arn:aws:iam::306651331583:role/service-role/MediaConvert_Default_Role',
      Settings: mediaConvertJobSettings,
      StatusUpdateInterval: 'SECONDS_60',
    })
  );

  res.status(200).send(response);
});

router.get(
  '/job-info/:jobId?createdAt=:createdAt',
  auth,
  async (req, res, next) => {
    const response = await axios.get(
      `https://xnbzilj6c.mediaconvert.ap-south-1.amazonaws.com/${req.query.createdAt}/jobs/${req.params.jobId}`
    );

    res.status(200).send(response);
  }
);

router.post('/notification', async (req, res) => {
  const messageType = req.get('X-Amz-Sns-Message-Type');
  if (messageType === 'SubscriptionConfirmation') {
    const subscribeURL = JSON.parse(req.body).SubscribeURL;
    await axios.get(subscribeURL);
  } else if (messageType === 'Notification') {
    const notificationMsg = JSON.parse(req.body).Message;
    console.log(notificationMsg);
    io.getIO().emit('conversionJob', notificationMsg);

    if (notificationMsg.detail.status === 'COMPLETE') {
      // write logic to add video info to db
    }
  }
  res.status(200).send('Notification received.');
});

module.exports = router;
