const mongoose = require('mongoose');

let comentsSchema = mongoose.Schema({


    body : String,
    userId: String,


});

let Comment= mongoose.model('Comment',comentsSchema);

module.exports = Comment;