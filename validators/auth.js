const { body } = require('express-validator');

exports.signupValidator = [
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email address.')
    .normalizeEmail(),
  body('password').trim().isLength({ min: '8' }),
  body('name').trim().not().isEmpty(),
];

exports.login = [
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email address.')
    .normalizeEmail(),
  body('password').trim().not.isEmpty(),
];
