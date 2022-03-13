const mongoose = require('mongoose');

//const url = 'mongodb://localhost:27017/todo';
const url = 'mongodb+srv://deploy:uploaddeploy@cluster0.ofm2z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url,{useNewUrlParser: true});

module.exports = mongoose; 