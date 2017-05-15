const express = require('express');
const Article = require('../models/article');
const commentsArticle = require('./commentsarticle');

module.exports = function () {
    const router = express.Router({mergeParams:true});


    router.get('/', function (req, res) {
        Article.find({})
            .then(articles => {
                res.json(articles)
            })

    });

    router.get('/:id', function (req, res) {
        let id = req.params.id;

        Article.findById(id)
            .then(articles => res.json(articles));
    });

    router.post('/', function (req, res) {
        let userData = req.body;

        let article = new Article(userData);

        article.save().then(result =>res.json(result));


    });


    router.put('/:id', function (req, res) {
        let id = req.params.id;

        let userData = req.body;

        Article
            .findOneAndUpdate(id,userData)
            .then(result => res.json(result));


    });


    router.delete('/:id', function (req, res) {
        let id = req.params.id;
        Article.findByIdAndRemove(id)
            .then(result => res.json(result))


    });

    router.use('/:articleId/comments', commentsArticle());

    return router;
};