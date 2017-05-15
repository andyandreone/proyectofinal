/**
 * Created by AnDy1 on 11/5/2017.
 */

const express = require('express');
const User = require('../models/user');
const authorArticleRouter = require('./authorsarticles');

module.exports = function () {
    const router = express.Router();



    router.get('/', function (req, res) {
        User.find({})
            .then(users => {
                res.json(users)
            })
    });

    router.get('/:id', function (req, res) {
       let id = req.params.id;

       User.findById(id)
           .then(user => res.json(user));
    });


    router.post('/', function (req, res) {
        let userData = req.body;

        let user = new User(userData);

        user.save().then(result =>res.json(result));

        console.log('Se creo el ',user.fullname());


    });

    router.put('/id', function (req, res) {
        let userData = req.body;
        let id = req.params.id;


        User
            .findOneAndUpdate(id,userData)
            .then(result => res.json(result));

    });


    router.delete('/:id', function (req, res) {
       let id = req.params.id;

        User.findByIdAndRemove(id)
            .then(result => res.json(result))
    });

    router.use('/:userId/articles', authorArticleRouter());

    return router;
};