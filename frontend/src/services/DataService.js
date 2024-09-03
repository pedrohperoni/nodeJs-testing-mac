import axios from 'axios'

const API_URL = "http://localhost:3000/data"

export const getData = () => {
    return axios.get(API_URL)
}

export const createData= (data) => {
    return axios.post(API_URL, data)
}

export const updateData = (id, data) => {
    return axios.put(`${API_URL}/${id}`, data)
}

export const deleteData = (id) => {
    return axios.delete(`${API_URL}/${id}`)
}