var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	title: String,
	author: String,
	image: String, 
	release_date: String

});

var Book = mongoose.model('Book', BookSchema);


//This is where we export books from this file to somewhere else
module.exports = Book;