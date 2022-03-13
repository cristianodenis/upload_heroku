const express = require('express');
const { append } = require('express/lib/response');
const mongoose = require('mongoose');

//const url = 'mongodb://localhost:27017/todo';
const url = process.env.MONGO_URL;
mongoose.connect(url,{useNewUrlParser: true});
console.log("testando " + process.env.MONGO_URL);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

module.exports = mongoose; 