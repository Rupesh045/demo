import { model, Schema } from "mongoose"

class TertiaryCategoryModel {
    public _model: any
    private tertiaryCategorySchema: any
    constructor() {
        this.initialiseSchema()
        this._model = model('tertiaryCategory', this.tertiaryCategorySchema)
    }
    private initialiseSchema() {
        this.tertiaryCategorySchema = new Schema({
            name: {
                type: String,
                required: true
            },
            description: {
                type: String
            },
            primaryCategory: {
                required: true,
                type: Schema.Types.ObjectId
            },
            secondaryCategory: {
                required: true,
                type: Schema.Types.ObjectId
            },
            photo: {
                type: String
            },
            addedBy: {
                type: Object
            },
            addedAt: {
                type: Number
            },
            updatedAt: {
                type: Number
            }
        })
    }
}
export let tertiaryCategoryModel = new TertiaryCategoryModel()