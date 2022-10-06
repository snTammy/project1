//handles our endpoint/CRUD functions
const router = require('express').Router();

//import controller functions
const { findAllBooks } = require('../controllers/book.controller.js');


//Get ALL Books
//books
router.get('/', async (req, res) =>{
    const books = await findAllBooks();
    res.json(books);
})
//Get Book by Id

//Create new Book

//Update a Book

//Delete a Book

//export router
module.exports = router;