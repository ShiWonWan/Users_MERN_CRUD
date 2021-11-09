const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    dateLogUp: {
        type: Date,
        require: true,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)