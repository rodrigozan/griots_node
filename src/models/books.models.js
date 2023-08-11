import mongoose from 'mongoose'

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
    coAuthors: [mongoose.Schema.Types.ObjectId],
    cover: {
        type: String,
    },
    description: {
        type: String,
    },
    genre: String,
    subgenres: [String],
    description: String,
    tags: [String],
    isbn: Number,
    chapters: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter'
    },
    feedbacks: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feedback'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: [Date],
        default: [],
    },

})

const Book = mongoose.model('Book', bookSchema)

export default Book
