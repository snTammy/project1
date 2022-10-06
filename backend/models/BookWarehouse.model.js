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
    maxCapacity: Number
});

//convert schema to model
const BookWarehouse = mongoose.model('Warehouse', warehouseSchema, 'BookWarehouse');

//export
module.exports = BookWarehouse;