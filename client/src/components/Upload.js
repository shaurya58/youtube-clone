import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import openSocket from 'socket.io-client';
import videojs from 'video.js';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [conversionJobStatus, setConversionJobStatus] = useState('');

  const videoRef = useRef(null);
  const playerRef = useRef(null);

  const options = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: 'https://d3tuoyx9w0u1rq.cloudfront.net/test/Default/HLS/test_360.m3u8',
        // type: 'video/mp4'
      },
    ],
  };

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = (playerRef.current = videojs(videoElement, options, () => {
        handlePlayerReady(player);
      }));
    } else {
      // you can update player here [update player through props]
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [options]);

  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

  const handleFileInputChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpc29kaWFzaGF1cnlhQGdtYWlsLmNvbSIsInVzZXJJZCI6IjYxNmVmNzg5Mjc2YjIyNWZiNzVhYjU5ZSIsImlhdCI6MTYzNjQ4MTgzOSwiZXhwIjoxNjM2NDg1NDM5fQ.N99aq1Rgoh6g-vGH-RIm2RZHlOh-vvhBuwAFVDtpulM';

    event.preventDefault();

    const CHUNK_SIZE = 5 * 1024 * 1024;
    let uploadedVideoResponse;

    if (file.size > CHUNK_SIZE) {
      const multipartUploadInitResponse = await axios.get(
        'http://localhost:5000/video/get-multipart-upload-id',
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );

      let chunk;
      let parts = [];

      for (let i = 0; i < file.size; i = i + CHUNK_SIZE) {
        if (i + CHUNK_SIZE <= file.size) {
          chunk = file.slice(i, i + CHUNK_SIZE);
        } else {
          chunk = file.slice(i, file.size);
        }

        const partNumber = Math.ceil(i / CHUNK_SIZE) + 1;

        // send request to get pre-signed url for upload part command
        const preSignedUrlResponse = await axios.post(
          'http://localhost:5000/video/get-presigned-url',
          {
            method: 'uploadPart',
            chunk,
            key: multipartUploadInitResponse.data.Key,
            uploadId: multipartUploadInitResponse.data.UploadId,
            partNumber,
            contentLength: chunk.size,
          },
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          }
        );

        // send request for upload part command in this case
        const response = await axios.put(
          preSignedUrlResponse.data.preSignedUrl,
          chunk,
          {
            headers: {
              'Content-Type': 'application/octet-stream',
            },
          }
        );

        setUploadProgress(
          (prevUploadProgress) => prevUploadProgress + chunk.size
        );

        parts.push({
          ETag: response.headers.etag.replaceAll('"', ''),
          PartNumber: partNumber,
        });
      }

      // send complete multipart upload request
      uploadedVideoResponse = await axios.post(
        'http://localhost:5000/video/complete-multipart-upload',
        {
          key: multipartUploadInitResponse.data.Key,
          uploadId: multipartUploadInitResponse.data.UploadId,
          parts,
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
    } else {
      const preSignedUrl = await axios.post(
        'http://localhost:5000/video/get-presigned-url',
        {
          method: 'putObject',
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );

      uploadedVideoResponse = await axios.put(
        preSignedUrl,
        file.slice(0, file.size),
        {
          headers: {
            'Content-Type': 'application/octet-stream',
          },
        }
      );

      setUploadProgress(file.size);
    }

    const mediaConversionResponse = await axios.post(
      'http://localhost:5000/video/convert-media',
      {
        key: uploadedVideoResponse.data.Key,
      },
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );

    console.log(mediaConversionResponse);

    const socket = openSocket('http://localhost:5000');
    socket.on('conversionJob', (message) => {
      const parsedMsg = JSON.parse(message);
      console.log(parsedMsg);
      console.log(parsedMsg.detail.status);
      setConversionJobStatus(parsedMsg.detail.status);

      if (parsedMsg.detail.status === 'COMPLETE') {
        socket.disconnect();
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type='file' onChange={handleFileInputChange} />
        <button type='submit'>Upload</button>
      </form>
      {file && `${(uploadProgress / file.size) * 100}% uploaded..`}
      {conversionJobStatus}
      <video ref={videoRef} />
    </div>
  );
};

export default Upload;
