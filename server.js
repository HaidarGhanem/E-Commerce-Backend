require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { connectMongo } = require('./src/db/mongo/index')
const { sequelize } = require('./src/db/postgres/index')

const PORT = process.env.PORT || 3000
const server = express()

server.use(cors())
server.use(bodyParser.json())

server.use('/api/auth' , require('./src/routes/auth.route'))
server.use('/api/product' , require('./src/routes/product.route'))

(async () => {
    await connectMongo.connect()
    await sequelize.sync()
    
    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})()