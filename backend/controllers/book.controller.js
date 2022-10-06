//All queries made here

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
//export all our functions
module.exports = {findAllBooks, findBookById};