const express = require('express')
const router = express.Router()
const dataController = require('../controllers/dataController')

// READ
router.get('/', dataController.getData);

// CREATE
router.post('/', dataController.createData);

// UPDATE
router.put('/:id', dataController.updateData);

// DELETE
router.delete('/:id', dataController.deleteData);

module.exports = router;