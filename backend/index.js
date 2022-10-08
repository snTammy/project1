//variable declaration to link node_modules to dependencies?
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();  //loads .env file contents to Node environment
const app = express(); //create our application obj using express
app.use(express.json());//middleware used on our REST server, requests automatically will parse into a JS object
// responses automatically will be converted to JSON
const cors = require('cors');
app.use(cors()); // This enables CORS middleware and will allow my server to take requests from other domains


// Routes
const bookRouter = require('./routes/book.route.js');
app.use('/books', bookRouter);
app.use('/warehouses', require('./routes/warehouse.route.js')); 

// Connect to MongoDB
const connectToMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected to MongoDB");
    }catch (err){
        console.log(err);
        process.exit(1);
    }
}

connectToMongoDB();

// have app listen to port specified in .env or default
app.listen(process.env.PORT || 8080, () =>{
    console.log(`Listening on port ${process.env.PORT || 8080}`);

});