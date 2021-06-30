import {Request, Response} from 'express';
import {validationResult} from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import {UserModel} from '../models/UserModel';

class UserController {
  async registration(req: Request, res: Response) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Incorrect request', errors: errors.array() });
      }

      const { email, password } = req.body;

      const candidate = await UserModel.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: `User with email ${email} already exist` });
      }

      const hashPassword = await bcrypt.hash(password, 5);

      const user = new UserModel({ email, password: hashPassword });

      await user.save();

      return res.json({ message: 'User was created' });
    } catch (e) {
      console.error(e);
      res.send({ message: 'Server error'});
    }
  }

  async authorization(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const user = await UserModel.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: `User with email ${email} not found` });
      }

      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid password' });
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY || 'default-secret-key', { expiresIn: '1h' });

      res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          diskSpace: user.diskSpace,
          usedSpace: user.usedSpace,
          avatar: user.avatar,
        },
      });
    } catch (e) {
      console.error(e);
      res.send({ message: 'Server error'});
    }
  }
}

export const userController = new UserController();
