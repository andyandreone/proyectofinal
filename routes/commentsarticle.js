/**
 * Created by AnDy1 on 14/5/2017.
 */

const express = require('express');
const Comment = require('../models/comment');

module.exports = function () {
    const router = express.Router({mergeParams:true});


    router.get('/', function (req, res) {
        Comment.find({})
            .then(comments => {
                res.json(comments)
            })

    });

    router.get('/:id', function (req, res) {
        let id = req.params.id;

        Comment.findById(id)
            .then(comment => res.json(comment));
    });

    router.post('/', function (req, res) {
        let userData = req.body;

        let comment = new Comment(userData);

        comment.save().then(result =>res.json(result));


    });


    router.put('/:id', function (req, res) {
        let id = req.params.id;

        let userData = req.body;

        Comment
            .findOneAndUpdate(id,userData)
            .then(result => res.json(result));


    });


    router.delete('/:id', function (req, res) {
        let id = req.params.id;
        Comment.findByIdAndRemove(id)
            .then(result => res.json(result))


    });



    return router;
};