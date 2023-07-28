import app from './config/express'
import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env.production' });
} else if (process.env.NODE_ENV === 'development') { 
  dotenv.config({ path: '.env.development' });
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Go go Power Rangers in port ${PORT}`);
});
