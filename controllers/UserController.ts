import {Request, Response} from 'express';
import {validationResult} from 'express-validator';
import bcrypt from 'bcrypt';

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
}

export const userController = new UserController();
