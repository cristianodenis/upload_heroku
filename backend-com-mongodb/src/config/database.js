const mongoose = require('mongoose');

//const url = 'mongodb://localhost:27017/todo';
const url = 'https://deploy-backend-tarefas.herokuapp.com/';
mongoose.connect(url,{useNewUrlParser: true});

module.exports = mongoose; 