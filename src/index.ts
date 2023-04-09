import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('express backend server');
});

app.listen(PORT, () => {
  console.log('Express backend server running on port:', PORT);
});
