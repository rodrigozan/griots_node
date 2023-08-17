import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import dotenv from 'dotenv'

let connection

if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '.env.production' })
    connection = mongoose.createConnection(process.env.DATABASE_URL)
}else if (process.env.NODE_ENV === 'development') { 
    dotenv.config({ path: '.env.development' }) 
    connection = mongoose.createConnection(process.env.DATABASE_URL)
}

autoIncrement.initialize(connection)

const chapterSchema = new mongoose.Schema({
    key: Number,
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
        required: true,
    },
});

chapterSchema.plugin(autoIncrement.plugin, {
    model: 'Chapter',
    field: 'key',
    startAt: 0,
    incrementBy: 1,
})

const Chapter = mongoose.model('Chapter', chapterSchema);

export default Chapter