import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  birth: Date,
  gender: {
    type: String,
    enum: ['Male', 'Femmy', 'Other'],
  },
  zipCode: String,
  street: {
    type: String,
  },
  number: Number,
  district: String,
  city: String,
  state: String,
  country: String,
  role: {
    type: String,
    enum: ['writer', 'system_admin', 'reader', 'editor', 'publisher'],
    default: 'writer',
  },
});

const User = mongoose.model('User', userSchema);

export default User;
