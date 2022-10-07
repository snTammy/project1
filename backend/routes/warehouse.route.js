//handles our endpoint/CRUD functions
const router = require('express').Router();

//import controller functions
const {findAllWarehouses, createWarehouse} = require('../controllers/warehouse.controller.js');

//Functionality
//Get all warehouses
router.get('/', async (req, res) => {
    try{
        const warehouses = await findAllWarehouses();
        res.status(200).json(warehouses);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try{
        const warehouseToAdd = await createWarehouse(req.body);
        res.status(201).json(warehouseToAdd);
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
})

//export module
module.exports = router;