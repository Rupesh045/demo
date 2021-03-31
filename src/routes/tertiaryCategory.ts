export { };
const express = require('express')
const router = express.Router()

const { addTertiaryCategory, getAllTertiaryCategories, getCategoryById, updateCategory, deleteCategory } = require('../controllers/tertiaryCategory')

router.post('/add/category/tertiary', addTertiaryCategory)
router.get('/list/categories/tertiary', getAllTertiaryCategories)
router.get('/get/category/tertiary/:categoryId', getCategoryById)
router.put('/update/category/tertiary/:categoryId', updateCategory)
router.delete('/delete/category/tertiary/:categoryId', deleteCategory)


module.exports = router