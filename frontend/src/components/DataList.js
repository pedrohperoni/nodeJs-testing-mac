import React, { useEffect, useState } from 'react'
import { getData, deleteData } from '../services/DataService'

function DataList({ onUpdate }) {
    const [data, setData] = useState([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        getData().then(response => setData(response.data))
    }

    const handleDelete = (id) => {
        deleteData(id).then(() => loadData())
    }

    return (
        <div>
            <h2>Issues</h2>
            <ul>
                {data.map(data => (
                    <li key={data.id}>
                        {data.title} - {data.description}
                        <button onClick={() => onUpdate(data)}>Update</button>
                        <button onClick={() => handleDelete(data.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DataList