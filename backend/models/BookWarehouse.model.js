//data model for bookwarehouse
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Warehouse schema defined
 * name: string
 * currentCapacity: Number
 * maxCapacity: Number
 */

const warehouseSchema = new Schema({
    name: String,
    currentCapacity: Number,
    maxCapacity: Number,
    inventory: [{
        book: {
            type: mongoose.Types.ObjectId,
            ref: 'Book' // ref indicates this ObjectId refers to Book schema
        },
        quantity: Number
    }]
  
});

//convert schema to model
const BookWarehouse = mongoose.model('BookWarehouse', warehouseSchema, 'BookWarehouses');

//export
module.exports = BookWarehouse;