//attach model
const BookWarehouse = require('../models/BookWarehouse.model.js');

//populate warehouse
const findAllWarehouses = async() => await BookWarehouse.find().populate('inventory'); 

//create warehouse
const createWarehouse = async (warehouseToAdd) => {
    try{
        const warehouse = new BookWarehouse(warehouseToAdd);
        await warehouse.save();
        return warehouse;

    } catch (err) {
        throw err;
    }
}

//export functions
module.exports = {findAllWarehouses, createWarehouse};