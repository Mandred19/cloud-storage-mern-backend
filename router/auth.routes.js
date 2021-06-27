// import Router from 'express';
// import User from '../models/User';
// import bcrypt from 'bcryptjs';
// import { check, validationResult } from 'express-validator';
//
// const router = new Router();
//
// router.post(
//   '/registration',
//   [
//       check('email', 'Incorrect email').isEmail(),
//       check('passwordFirst', 'Password must be longer than 3 and shorter than 12').isLength({ min: 3, max: 12 }),
//     ],
//     async (req, res) => {
//   try {
//     const errors = validationResult(req);
//
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ message: 'Incorrect request', errors });
//     }
//
//     const { email, password } = req.body;
//
//     const candidate = await User.findOne(email);
//
//     if (candidate) {
//       return res.status(400).json({ message: `User with email ${email} already exist` });
//     }
//
//     const hashPassword = await bcrypt.hash(password, 15);
//
//     const user = new User({ email, password: hashPassword });
//
//     await user.save();
//
//     return res.json({ message: 'User was created' });
//   } catch (e) {
//     console.error(e);
//     res.send({ message: 'Server error'});
//   }
// });
//
// export default router;
