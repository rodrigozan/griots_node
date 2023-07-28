import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback
