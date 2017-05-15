const mongoose = require('mongoose');

let tagSchema = mongoose.Schema({

    name: String


});

let Tag = mongoose.model('Tag',tagSchema);

module.exports = Tag;