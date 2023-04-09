import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser = require('body-parser');

dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();

/** Express Middleware Setup */
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  res.status(200).send({ data: 'hello world version 1.0' });
});

// Using Request URL Params

app.listen(PORT, () => {
  console.log('Express backend server running on port:', PORT);
});
