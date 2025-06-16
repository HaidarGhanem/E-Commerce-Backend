const mongoose = require('mongoose')
const config = require('../../config/mongo')

const connectMongo = async () => {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(config.url, config.options)
        console.log(`MongoDB connected : ${conn.connection.host}`)
    } catch (error) {
        console.log({message: 'mongo connection error' , error: error.message})
    }
}

module.exports = {connectMongo}