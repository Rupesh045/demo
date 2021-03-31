import { model, Schema } from "mongoose"

class ProductModel {
    public _model: any
    private productSchema: any
    constructor() {
        this.initialiseSchema()
        this._model = model('product', this.productSchema)
    }
    private initialiseSchema() {
        this.productSchema = new Schema({
            productName: {
                type: String,
                required: true
            },
            category: {
                type: String,
                required: true
            },
            description: {
                type: String
            },
            photo: {
                type: String
            },
            stock: {
                type: Number,
                required: true
                //type:Object
            },
            primaryCategory: {
                type: Object
            },
            seconadyCategory: {
                type: Object
            },
            tertiaryCategory: {
                type: Object
            },
            addedBy: {
                type: Object
            },
            addedAt: { type: Number },
            updatedAt: { type: Number }
        })
    }
}
export let productModel = new ProductModel()