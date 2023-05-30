const moongoose = require('mongoose');

var url = 'mongodb://localhost:27017/booksDB';

const connection = moongoose.createConnection(url);

module.exports = connection;