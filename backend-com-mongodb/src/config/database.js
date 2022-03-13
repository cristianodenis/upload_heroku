const mongoose = require('mongoose');

//const url = 'mongodb://localhost:27017/todo';
const url = process.env.MONGO_URL;
mongoose.connect(url,{useNewUrlParser: true});

module.exports = mongoose; 