const dataService = require('../services/dataService')

// READ
    const getData = (req, res) => {
    const data = dataService.getData()
    res.send(data)
};

// CREATE
    const createData = (req, res) => {
    const newdata = req.body;
    const createdData = dataService.createData(newdata)
    console.log("Created:", createdData)
    res.status(201).send(createdData)
};

// UPDATE
    const updateData = (req, res) => {
    const id = parseInt(req.params.id)
    const updatedData = req.body
    const result = dataService.updateData(id, updatedData)
    console.log("Updated:", result)
    res.send(result)
};

// DELETE
    const deleteData = (req, res) => {
    const id = parseInt(req.params.id)
    dataService.deleteData(id)
    console.log("Deleted:", id)
    res.status(204).send()
};

module.exports = {
    getData,
    createData,
    updateData,
    deleteData
};