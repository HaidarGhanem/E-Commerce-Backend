const Product = require('../db/mongo/models/Products')

const createProduct = async ( name , price , category , stock ) => {
    try {
        const newProduct = Product.create(name , price , category , stock)
        await newProduct.save()
        return (newProduct)
    } catch (error) {
        console.log({message: 'error creating product' , error: error.message})
    }
}

const readOneProduct = async ( productname ) => {
    try {
        const product = await Product.findOne({name : productname})
        return (product)
    } catch (error) {
        console.log({message: 'error reading product' , error: error.message})
    }
}

const readAllProduct = async () => {
    try {
        const products = await Product.find({name : productname})
        return (products)
    } catch (error) {
        console.log({message: 'error reading products' , error: error.message})
    }
}

const editProduct = async ( productname , edits ) => {
    try {
        const product = await Product.findOneAndUpdate({name : productname} , edits , {new: true})
        return (product)
    } catch (error) {
        console.log({message: 'error editing product' , error: error.message})
    }
}

const deleteProduct = async ( productname ) => {
    try {
        await Product.findOneAndDelete({name: productname})
        return (`${productname} deleted successfully`)
    } catch (error) {
        console.log({message: 'error deleting product' , error: error.message})
    }
}

module.exports = { createProduct , readOneProduct , readAllProduct , editProduct , deleteProduct }