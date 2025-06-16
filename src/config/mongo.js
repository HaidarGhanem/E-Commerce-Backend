module.exports = {
    url: process.env.MONGO_URI || 'mongodb://localhost:27017/ShopNest',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}