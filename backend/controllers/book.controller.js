//All queries made here

const Books = require('../models/Book.model.js'); //attach model

//Find All Books
const findAllBooks = async () => {
    const books = await Books.find();
    return books;
}

//export all our functions
module.exports = {findAllBooks};