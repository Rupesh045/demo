const express = require('express')
const router = express.Router()
const { addProduct, getAllProducts, getProductByID, updateProduct, deleteProduct } = require('../controllers/product')

router.post('/add/product', addProduct)
router.get('/get/all-product', getAllProducts)
router.get('/get/product/:productId', getProductByID)
router.put('/update/product/:productId', updateProduct)
router.delete('/delete/product/:productId', deleteProduct)

module.exports = router