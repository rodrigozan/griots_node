import express from 'express';
import cors from 'cors';
import path from 'path'

import connectDatabase from './database';
import router from '../src/routes'
import local from '../src/router/local.routes'

const app = express();

connectDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src/views'));

app.use('/api', router);
app.use('/local', local)

export default app