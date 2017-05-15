const mongoose = require('mongoose');

let articleSchema = mongoose.Schema({

    title : String,
    body : String,
    authorId: String,
    tags: Array

});

let Article = mongoose.model('Article',articleSchema);

module.exports = Article;