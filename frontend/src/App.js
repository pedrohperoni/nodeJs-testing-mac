import React, { useState } from 'react'
import DataList from './components/DataList'
import DataForm from './components/DataForm'

function App() {
    const [dataToUpdate, setdataToUpdate] = useState(null)

    const handleUpdate = (data) => {
        setdataToUpdate(data)
    }

    const handleFormSubmit = () => {
        setdataToUpdate(null)
    }

    return (
        <div>
            <h1>data Tracker</h1>
            <DataForm dataToUpdate={dataToUpdate} onFormSubmit={handleFormSubmit} />
            <DataList onUpdate={handleUpdate} />
        </div>
    )
}

export default App