import express, { Request, Response } from 'express';
import {registrationValidationHandler} from './validationHandlers/registrationHandler';
import {userController} from "./controllers/UserController";

const app = express();

const PORT: number = process.env.PORT ? Number(process.env.PORT) : 8888;

const API_AUTH = '/api/auth';

app.use(express.json());

app.post(`${API_AUTH}registration`, registrationValidationHandler, userController.registration);
// app.post(`${API}authorization`, userController.authorization);

app.get('/hello', (_: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log('Server listen port:', PORT);
});

// const start = async () => {
//   try {
//     mongoose.connect(process.env.DB_URL)
//       .catch((e) => {
//         console.log(333, e);
//       });
//
//     const db = mongoose.connection;
//
//     db.on('error', (e) => {
//       console.log(111, e);
//     });
//     db.once('open', (d) => {
//       console.log(222, d);
//     })
//
//     app.get('/', function (req, res) {
//       res.send('Hello World!'); // This will serve your request to '/'.
//     });
//
//     app.listen(PORT, () => {
//       console.log('Server listen port:', PORT);
//     });
//   } catch (e) {
//     console.error(e);
//   }
// }
//
// start();
