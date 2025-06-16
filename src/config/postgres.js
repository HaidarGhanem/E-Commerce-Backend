module.exports = {
    dialect: 'postgres',
    host: process.env.PG_HOST || 'localhost',
    username: process.env.PG_USER || 'postgres',
    password: process.env.PG_PASSWORD || 'postgres',
    database: process.env.PG_DB || 'product_db'
}