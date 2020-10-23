import mongoose from 'mongoose'
const { Schema } = mongoose

const toDoSchema = new Schema({
    body: String,
    due_date: {type: Date},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

export default mongoose.model('ToDo', toDoSchema)