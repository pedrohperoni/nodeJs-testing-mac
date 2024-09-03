let data = require('../models/dataModel')

const getData = () => {
    return data
}

const createData = (data) => {
    return data
};

const updateData = (id, updatedData) => {
    data = data.map(data => data.id === id ? updatedData : data)
    return updatedData
};

const deleteData = (id) => {
    data = data.filter(data => data.id !== id)
};

module.exports = {
    getData,
    createData,
    updateData,
    deleteData
};