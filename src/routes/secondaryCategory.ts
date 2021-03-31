export { };
const express = require('express')
const router = express.Router()

const { addSecondaryCategory, getAllSecondaryCategories, getCategoryById, updateCategory, deleteCategory } = require('../controllers/secondaryCategory')

router.post('/add/category/secondary', addSecondaryCategory)
router.get('/list/categories/secondary', getAllSecondaryCategories)
router.get('/get/category/secondary/:categoryId', getCategoryById)
router.put('/update/category/secondary/:categoryId', updateCategory)
router.delete('/delete/category/secondary/:categoryId', deleteCategory)

module.exports = router