const moment = require('moment');
import { productModel } from "../models/product"

exports.addProduct = async (req, res) => {
    try {
        let productSchema = new productModel._model({
            ...req.body,
            addedAt: moment.now(),
            updatedAt: moment.now()
        })
        await productSchema.save((err, product) => {
            if (err) {
                res.json({
                    code: 400,
                    error: 'Unable to add product'
                })
            }
            return res.json({
                code: 200,
                message: 'Product Added Succesfully',
                product
            })
        })
    } catch (error) {
        throw error
    }

}

exports.getProductByID = async (req, res) => {
    let productId = req.params.productId
    try {
        let productDetail = await productModel._model.findById(productId).exec((err, product) => {
            if (!product || err) {
                res.json({
                    code: 400,
                    error: 'Product Not Found'
                })
            }
            return res.json({
                code: 200,
                message: 'Product fetched Succesfully',
                product
            })
        })
    } catch (error) {
        throw error
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        let allProducts = await productModel._model.find().lean().exec((err, products) => {
            if (err) {
                res.json({
                    code: 400,
                    error: 'Unable to fetch products'
                })
            }
            return res.json({
                code: 200,
                message: 'Products fetched Succesfully',
                products
            })
        })
    } catch (error) {
        throw error
    }
}

exports.updateProduct = async (req, res) => {
    let productId = req.params.productId
    let UpdatedData = req.body
    UpdatedData.updatedAt = moment.now()
    try {
        let updatedProduct = await productModel._model.findOneAndUpdate({ '_id': productId }, UpdatedData).exec((err, updatedproduct) => {
            if (err) {
                res.json({
                    code: 400,
                    error: 'Unable to update products'
                })
            }
            return res.json({
                code: 200,
                message: 'Product updated Succesfully',
                updatedproduct
            })
        })
    } catch (error) {
        throw error
    }
}

exports.deleteProduct = async (req, res) => {
    let productId = req.params.productId
    try {
        let deletedProduct = await productModel._model.findOneAndRemove({ '_id': productId }).exec((err, deletedProduct) => {
            if (err) {
                res.json({
                    code: 400,
                    error: 'Unable to delete product'
                })
            }
            return res.json({
                code: 200,
                message: 'Product deleted succesfully',
                deletedProduct
            })
        })
    } catch (error) {
        throw error
    }

}