import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
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
  birth: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ['Masculino', 'Feminino', 'Outro'],
  },
  zipCode: {
    type: String,
  },
  street: {
    type: String,
  },
  number: {
    type: String,
  },
  district: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  role: {
    type: String,
    enum: ['writer', 'system_admin', 'reader', 'editor', 'publisher'],
    default: 'writer',
  },
});

const User = mongoose.model('User', userSchema);

export default User;
