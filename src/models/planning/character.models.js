import mongoose from 'mongoose';

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  race: {
    type: String,
    required: true,
  },
  class: {
    type: String,
  },
  abilities: [
    {
      type: String,
    },
  ],
  utensil: [
    {
      type: [String],
    },
  ],
  backstory: {
    type: String,
    required: true,
  },
  worldbuilding: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Worldbuilding',
    required: true,
  },
  plot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plot',
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
  },
  series: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Series',
  },
});

const Character = mongoose.model('Character', characterSchema);

export default Character;
