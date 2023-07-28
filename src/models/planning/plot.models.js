import mongoose from 'mongoose';

const plotSchema = new mongoose.Schema({
  title: {
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
});

const Plot = mongoose.model('Plot', plotSchema);

export default Plot;
