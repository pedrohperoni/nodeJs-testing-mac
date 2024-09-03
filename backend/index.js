const express = require('express')
const dataRoutes = require('./routes/dataRoutes')
const cors = require('cors')


const app = express()

app.use(cors());
app.use(express.json())

app.use('/data', dataRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});