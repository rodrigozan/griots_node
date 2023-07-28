import mongoose from 'mongoose';

const chapterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

const Chapter = mongoose.model('Chapter', chapterSchema);

export default Chapter