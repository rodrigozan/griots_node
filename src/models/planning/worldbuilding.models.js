import mongoose from 'mongoose';

const worldbuildingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
  },
  serie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Serie',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  characters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Character',
    },
  ],
  cultures: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Culture',
    },
  ],
  folks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Folks',
    },
  ],
  locations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Location',
    },
  ],
  events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
    },
  ],
  magicSystems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MagicSystem',
    },
  ],
  mysticalRaces: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mystical Races',
    },
  ],
});

const Worldbuilding = mongoose.model('Worldbuilding', worldbuildingSchema);

export default Worldbuilding;
