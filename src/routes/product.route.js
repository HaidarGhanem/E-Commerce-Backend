const express = require('express')
const { createProduct , readOneProduct , readAllProduct , editProduct , deleteProduct } = require('../controllers/product.controller')
const router = express.Router()

router.post('/', async (req,res) => {
    try {
        const { productName , price , category , stock } = req.body
        const result = await createProduct( productName , price , category , stock )
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({message: 'internal server error - creating product' , error: error.message})
    }
})

router.get('/name', async (req,res) => {
    try {
        const productName = req.params.name
        const result = await readOneProduct( productName )
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: 'internal server error - reading product' , error: error.message})
    }
})

router.get('/', async (req,res) => {
    try {
        const result = await readAllProduct()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: 'internal server error - reading products' , error: error.message})
    }
})

router.put('/name', async (req,res) => {
    try {
        const productName = req.params.name
        const edits = req.body
        const result = await editProduct(productName , edits)
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({message: 'internal server error - updating product' , error: error.message})
    }
})

router.put('/name', async (req,res) => {
    try {
        const productName = req.params.name
        const result = await deleteProduct(productName)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: 'internal server error - deleting product' , error: error.message})
    }
})

module.exports = router