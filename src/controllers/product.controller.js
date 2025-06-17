const {ProductService} = require('../services/product.service')

const createProduct = async (req,res) => {
    try {
        const {name , price , category , stock} = req.body
        const newProduct = ProductService.create({name , price , category , stock})
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(500).json({message: 'error creating product' , error: error.message})
    }
}

const readOneProduct = async (req,res) => {
    try {
        const productname = req.body
        const product = await ProductService.findByName(productname)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: 'error reading product - by: Name' , error: error.message})
    }
}

const readByCategory = async (req,res) => {
    try {
        const category = req.body
        const products = await ProductService.findByCategory(category)
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: 'error reading products - by: Category' , error: error.message})
    }
}

const readAllProduct = async (req,res) => {
    try {
        const products = await ProductService.findAll()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: 'error reading all products' , error: error.message})
    }
}

const editProduct = async (req,res) => {
    try {
        const { productName , newData } = req.body
        const product = await ProductService.update(productName, newData)
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({message: 'error editing product' , error: error.message})
    }
}

const deleteProduct = async (req,res) => {
    try {
        const {productname} = req.body
        await ProductService.delete(productname)
        res.status(200).json({message: `${productname} deleted successfully`})
    } catch (error) {
        res.status(500).json({message: 'error deleting product' , error: error.message})
    }
}

module.exports = { createProduct , readOneProduct , readByCategory , readAllProduct , editProduct , deleteProduct }