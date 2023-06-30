import express from 'express';
import dotenv from 'dotenv';

import connectDatabase from './config/database';
import router from './src/routes'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

connectDatabase();

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Go go Power Rangers in port ${PORT}`);
});
