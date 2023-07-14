import mongoose from 'mongoose'
import dotenv from 'dotenv'

let connectDatabase

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env.production' })
  connectDatabase = async () => { 
    try {
      await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
      console.log('Database connected! By the Power of Grayskull!!!I have the power!')
    } catch (error) {
      console.error('Oh No, Zordon! Error in Morphin Time:', error)
      process.exit(1)
    }
  }
} else if (process.env.NODE_ENV === 'development') { 
  dotenv.config({ path: '.env.development' }) 
  connectDatabase = async () => { 
    try {
      await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
      console.log('Database connected! By the Power of Grayskull!!!I have the power!')
    } catch (error) {
      console.error('Oh No, Zordon! Error in Morphin Time:', error)
      process.exit(1)
    }
  }
}

export default connectDatabase
