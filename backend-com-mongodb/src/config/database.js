const mongoose = require('mongoose');

//const url = 'mongodb://localhost:27017/todo';
const url = process.env.MONGO_URL;
mongoose.connect(url,{useNewUrlParser: true});
console.log("testando " + process.env.MONGO_URL);

module.exports = mongoose; 