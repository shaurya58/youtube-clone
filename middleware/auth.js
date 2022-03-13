const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');

  if (!authHeader) {
    console.log('absent authHeader');
    const error = new Error('User not authenticated.');
    error.statusCode = 401;
    throw error;
  }

  const token = authHeader.split(' ')[1].trim();
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, config.get('JWT_SECRET'));
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }

  if (!decodedToken) {
    console.log('failed decoding');
    const error = new Error('User not authenticated.');
    error.statusCode = 401;
    throw error;
  }

  req.userId = decodedToken.userId;
  next();
};
