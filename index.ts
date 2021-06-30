import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import {registrationValidationHandler} from './validationHandlers/registrationHandler';
import {userController} from "./controllers/UserController";

import './core/db';

const app = express();

const PORT: number = process.env.PORT ? Number(process.env.PORT) : 8888;

const API_AUTH = '/api/auth';

app.use(express.json());

app.post(`${API_AUTH}/registration`, registrationValidationHandler, userController.registration);
app.post(`${API_AUTH}/authorization`, userController.authorization);

app.listen(PORT, () => {
  console.log('Server listen port:', PORT);
});
