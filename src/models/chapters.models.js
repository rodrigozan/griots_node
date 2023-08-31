import mongoose from 'mongoose';

const chapterSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    slug: {  
        type: String,   
    },
});

const Chapter = mongoose.model('Chapter', chapterSchema);

export default Chapter