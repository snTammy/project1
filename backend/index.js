//variable declaration to link node_modules to dependencies?
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();  //loads .env file contents to Node environment
const app = express(); //create our application obj using express
app.use(express.json());//middleware used on our REST server, requests automatically will parse into a JS object
// responses automatically will be converted to JSON

// Routes

// Connect to MongoDB

// have app listen to port
