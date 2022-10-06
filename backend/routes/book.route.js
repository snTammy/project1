//handles our endpoint/CRUD functions
const router = require('express').Router();
const mongoose = require('mongoose');

//import controller functions
const { findAllBooks, findBookById, createBook, updateBook, deleteBookById } = require('../controllers/book.controller.js');

// Validate ObjectId middleware
const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(204).send(); // Send back the response early
    } else {
        next(); // This calls the standard route for GET/POST/PUT/DELETE with (req, res)
    }
}
//Get ALL Books
//books
router.get('/', async (req, res) =>{
    const books = await findAllBooks();
    res.json(books);
});

//Get Book by Id
router.get('/:id',validateObjectId, async (req, res) =>{
    //req.params.id extracts the id number from the URL
    try{
        const book = await findBookById(req.params.id);
        res.json(book);
    } catch (err) {
        //rejected promise = no book found
        res.status(err?.status ?? 500).json(err);
    }
});

//Create new Book
router.post('/', async (req, res) => {
    try {
        // For POST requests, we send the data through the request body
        const book = await createBook(req.body);
        res.status(201).json(book);
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
});

//Update a Book
router.put('/:id', validateObjectId, async (req, res) => {
    try {
        // For PUT requests, the data to update comes via the request body
        await updateBook(req.params.id, req.body);
        res.send();
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
});

//Delete a Book
router.delete('/:id', validateObjectId, async (req, res) => {
    try {
        await deleteBookById(req.params.id);
        res.send(); // 200 OK is good
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
});

//export router
module.exports = router;