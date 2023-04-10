import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser = require('body-parser');
import mongoose from 'mongoose';
import { London } from './data/open-weather';
import todoRoutes from './routes/todoRoutes';

dotenv.config();
const app = express();

/** Express Middleware Setup */
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/** ROUTES */
app.get('/', (req: Request, res: Response) => {
  res.status(200).send({ data: 'hello world version 1.0' });
});

app.use(todoRoutes);

// Using Request URL Params
type Params = {
  city: string;
};
type ResBody = {};
type ReqBody = {};
type ReqQuery = {};

/** Request Using Query Parameters */
app.get(
  '/weather/:city/:zipcode',
  (req: Request<Params, ResBody, ReqBody, ReqQuery>, res: Response) => {
    const { params, query, body } = req;
    res.status(200).send(London);
  }
);

/** Request Using Query String */
app.get(
  '/weather',
  (req: Request<Params, ResBody, ReqBody, ReqQuery>, res: Response) => {
    const { params, query, body } = req;
    res.status(200).send(London);
  }
);

/** MONGOOSE SETUP */
const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`connected to ${process.env.MONGO_URI}`);
    app.listen(PORT, () =>
      console.log(`express api server listening on port:${PORT}`)
    );
  })
  .catch((error) => console.log(`${error} did not connect`));
