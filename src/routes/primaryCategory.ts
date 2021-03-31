export { };
const express = require('express')
const router = express.Router()
const { addPrimaryCategory, getAllPrimaryCategories, getCategoryById, updateCategory, deleteCategory } = require('../controllers/primaryCategory')

router.post('/add/category/primary', addPrimaryCategory)
router.get('/list/categories/primary', getAllPrimaryCategories)
router.get('/get/category/primary/:categoryId', getCategoryById)
router.put('/update/category/primary/:categoryId', updateCategory)
router.delete('/delete/category/primary/:categoryId', deleteCategory)

module.exports = router
