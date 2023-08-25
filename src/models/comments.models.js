import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    answers: [
        {
            content: {
                type: String,
                required: true,
            },
            author: {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'User',
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
            },
        }
    ],
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
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: [Date],
        default: [],
    },
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment