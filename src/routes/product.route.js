const express = require('express')
const { createProduct , readOneProduct , readByCategory , readAllProduct , editProduct , deleteProduct } = require('../controllers/product.controller')
const router = express.Router()

router.post('/', createProduct)
router.get('/name', readOneProduct)
router.get('/category', readByCategory)
router.get('/', readAllProduct)
router.put('/name', editProduct)
router.delete('/name', deleteProduct)

module.exports = router