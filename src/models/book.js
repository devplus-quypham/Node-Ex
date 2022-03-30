const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String
        },
    author: {
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});
module.exports = mongoose.model('Book', bookSchema);