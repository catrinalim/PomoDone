const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Task', taskSchema)