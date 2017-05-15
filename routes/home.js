const express = require('express');
const Article = require('../models/article');


module.exports = function () {
    const router = express.Router({mergeParams:true});


    router.get('/', function (req, res) {
        Article.find({})
            .then(articles => {
                res.json(articles)
            })

    });




    return router;
};