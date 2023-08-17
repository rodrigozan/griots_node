import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    content: {
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
    chapter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter',
    },
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment