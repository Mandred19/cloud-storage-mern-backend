import {body} from 'express-validator';

export const registrationValidationHandler = [
  body('email')
    .isString()
    .withMessage('Value must be string')
    .isEmail()
    .withMessage('Incorrect email format')
    .isLength({ min: 10, max: 30 })
    .withMessage('Email must be longer than 10 and shorter than 30'),

  body('password')
    .isString()
    .withMessage('Value must be string')
    .isLength({ min: 3, max: 12 })
    .withMessage('Password must be longer than 3 and shorter than 12'),
    // .custom((value: string, { req }: Meta) => {
    //   if (value !== req.body.passwordTwo) {
    //     throw new Error('Passwords is not same');
    //   } else {
    //     return value;
    //   }
    // })
];
