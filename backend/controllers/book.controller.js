//All queries made here

const Book = require('../models/Book.model.js');
const Books = require('../models/Book.model.js'); //attach model

//Find All Books
const findAllBooks = async () => {
    const books = await Books.find();
    return books;
}
//Find specific book
const findBookById = async (id) => {
    try{
        const book = await Books.findById(id);
        if(book == null){
            throw {status:204, msg:`No book with the id ${id} was found.`}
        }
        return book; //Book is found
    } catch (err) {
        //Book not found
    }
};

//Create Book
const createBook = async (bookToSave) => {
    try{
        const book = new Book(bookToSave);
        await book.save();
        return book;
    } catch (err) {
        throw err;
    }
};
//export all our functions
module.exports = {findAllBooks, findBookById, createBook};