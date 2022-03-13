const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const mongoose = require('mongoose');

const authRouter = require('./routes/auth');
const videoRouter = require('./routes/video');

try {
  process.env.AWS_ACCESS_KEY_ID = config.get('AWS_ACCESS_KEY_ID');
  process.env.AWS_SECRET_ACCESS_KEY = config.get('AWS_SECRET_ACCESS_KEY');
} catch (err) {
  console.log(err);
}

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());

app.use((req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Try if client domain can be provided as a configuration so that
  // it can be provided here after reading from config
  // res.setHeader('Access-Control-Allow-Origin', '<client_domain>');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use('/auth', authRouter);
app.use('/video', videoRouter);

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message;
  const data = err.data;
  res.status(status).send({ message, data });
});

mongoose
  .connect(config.get('MONGODB_URI'))
  .then(() => {
    const server = app.listen(5000);
    const io = require('./socket').init(server);
    io.on('connection', (socket) => {
      console.log(`Client ${socket} connected.`);
    });

    io.on('disconnection', (socket) => {
      console.log(`Socket ${socket} disconnected.`);
    });
  })
  .catch((err) => console.log(err));
