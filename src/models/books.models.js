import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    series: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Serie',
    },
    worldbuilding: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Worldbuilding',
    },
    plot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plot',
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    cover: {
        type: String,
    },
    description: {
        type: String,
    },
    chapters: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter'
    },
    feedbacks: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feedback'
    },
});

const Book = mongoose.model('Book', bookSchema);

export default Book
