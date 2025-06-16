const { Sequelize } = require('sequelize')
const config = require('../../config/postgres')

const sequelize = new Sequelize(config)

(async () => {
    try {
        await sequelize.authenticate()
        console.log('PostgreSQL connected')
    } catch (error) {
        console.error('PostgreSQL connection error:', error)
    }
})()

module.exports = sequelize