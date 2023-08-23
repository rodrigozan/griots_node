import mongoose from 'mongoose'

import chaptersModels from './chapters.models'

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
    coAuthors: {
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
    genre: String,
    subgenres: [String],
    description: String,
    tags: [String],
    isbn: Number,
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
