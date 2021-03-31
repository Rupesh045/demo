const moment = require('moment');
import { secondaryCategorySchema } from "../models/secondaryCategory"

exports.addSecondaryCategory = async (req, res) => {
    try {
        let categorySchema = await secondaryCategorySchema._model({
            ...req.body,
            addedAt: moment.now(),
            updatedAt: moment.now()
        })
        await categorySchema.save((err, category) => {
            if (err) {
                res.json({
                    code: 400,
                    error: `Unable to add ${req.body.name} category`
                })
            }
            res.json({
                code: 200,
                message: `${req.body.name} category added successfully`,
                category
            })
        })
    } catch (error) {
        throw error
    }
}

exports.getAllSecondaryCategories = async (req, res) => {
    try {
        let allCategories = await secondaryCategorySchema._model.find().lean().exec((err, categories) => {
            if (err) {
                res.json({
                    code: 400,
                    error: 'Unable to get Categories'
                })
            }
            res.json({
                code: 200,
                message: 'categories fetched succesfully',
                categories
            })
        })
    } catch (error) {
        throw error
    }
}

exports.getCategoryById = async (req, res) => {
    let categoryId = req.params.categoryId
    try {
        let category = await secondaryCategorySchema._model.findById(categoryId).exec((err, category) => {
            if (err || !category) {
                res.json({
                    code: 400,
                    error: 'Category not found'
                })
            }
            res.json({
                code: 200,
                message: 'category fetched successfully',
                category
            })
        })
    } catch (error) {
        throw error
    }
}

exports.updateCategory = async (req, res) => {
    let categoryId = req.params.categoryId
    let UpdatedData = req.body
    UpdatedData.updatedAt = moment.now()
    try {
        let upadtedCategory = await secondaryCategorySchema._model.findOneAndUpdate({ '_id': categoryId }, UpdatedData).exec((err, upadtedCategory) => {
            if (err || !upadtedCategory) {
                res.json({
                    code: 400,
                    error: 'unable to update category'
                })
            }
            res.json({
                code: 200,
                message: 'category updated successfully',
                upadtedCategory
            })
        })
    } catch (error) {
        throw error
    }
}

exports.deleteCategory = async (req, res) => {
    let categoryId = req.params.categoryId
    try {
        let upadtedCategory = await secondaryCategorySchema._model.findOneAndRemove({ '_id': categoryId }).exec((err, deletedCategory) => {
            if (err || !deletedCategory) {
                res.json({
                    code: 400,
                    error: 'unable to update category'
                })
            }
            res.json({
                code: 200,
                message: 'category updated successfully',
                deletedCategory
            })
        })
    } catch (error) {
        throw error
    }
}
