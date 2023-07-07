import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDatabase from './config/database';
import router from './src/routes'

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env.production' });
} else if (process.env.NODE_ENV === 'development') { 
  dotenv.config({ path: '.env.development' });
}

const app = express();
const PORT = process.env.PORT || 3000;

connectDatabase();

app.use(express.json());
app.use(cors());

app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
})

app.use(router);

app.listen(PORT, () => {
  console.log(`Go go Power Rangers in port ${PORT}`);
});
