const express = require('express');
const bodyParser=require('body-parser');
const app = express();
const mongoose = require('mongoose');

const userRouter = require('./routes/users2');
const articleRouter = require('./routes/home');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost:27017/camada1667');

app.use("/users", userRouter());
app.use("/home", articleRouter());

app.listen(8000);
console.log("arranco el servidor en el puerto 8000");