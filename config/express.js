import express from 'express';
import cors from 'cors';

import connectDatabase from './database';
import router from '../src/routes'


const app = express();

connectDatabase();

app.use(express.json());
app.use(cors());

app.use(router);

export default app