const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        index: true
    },
    pirce:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        enum: ['electronics','clothing','books']
    },
    stock:{
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product