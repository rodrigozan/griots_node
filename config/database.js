import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDatabase = async () => {
  try {
    const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.ttlubgg.mongodb.net/?retryWrites=true&w=majority`;
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database connected! By the Power of Grayskull!!!I have the power!');
  } catch (error) {
    console.error('Oh No, Zordon! Error in Morphin Time:', error);
    process.exit(1);
  }
};

export default connectDatabase;
