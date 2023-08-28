import mongoose from 'mongoose';

const chapterSchema = new mongoose.Schema({
    chapterId: {
        type: Number,
        unique: true
    },
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

chapterSchema.pre('save', async function (next) {
    if (!this.chapterId) {
        const lastChapter = await this.constructor.findOne({}, { chapterId: 1 }, { sort: { chapterId: -1 } });
        this.chapterId = lastChapter ? lastChapter.chapterId + 1 : 1;
    }
    next();
});

const Chapter = mongoose.model('Chapter', chapterSchema);

export default Chapter