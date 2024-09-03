import React, { useState } from 'react'
import { createData, updateData } from '../services/DataService'

function DataForm({ dataToUpdate, onFormSubmit }) {
    const [data, setData] = useState(dataToUpdate || { id: '', title: '', description: '' })

    const handleSubmit = () => {
        if (dataToUpdate) {
            updateData(data.id, data).then(() => onFormSubmit())
        } else {
            createData(data).then(() => onFormSubmit())
        }
    }

    return (
        <div>
            <h2>{dataToUpdate ? "Update data" : "Create data"}</h2>
            <input 
                type="text" 
                placeholder="ID" 
                value={data.id}
                onChange={(e) => setData({ ...data, id: e.target.value })} 
            />
            <input 
                type="text" 
                placeholder="Title" 
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })} 
            />
            <input 
                type="text" 
                placeholder="Description" 
                value={data.description}
                onChange={(e) => setData({ ...data, description: e.target.value })} 
            />
            <button onClick={handleSubmit}>
                {dataToUpdate ? "Update data" : "Create data"}
            </button>
        </div>
    )
}

export default DataForm