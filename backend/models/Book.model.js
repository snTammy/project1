//data model for our books
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Book schema defined
 * cover: image
 * title: string
 * description: string
 * numPgs: number
 * releaseDate: Date
 * author: string
 */

const bookSchema = new Schema({
    title: String,
    description: String,
    coverUrl: String,
    numPgs: Number,
    author: String,
    releaseDate: Date
});

//transform schema into a model
const Book = mongoose.model('Book', bookSchema, 'Book');

//export Books model to use for queries for the collection
module.exports = Book;