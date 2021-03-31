import { model, Schema } from "mongoose"

class PrimaryCategoryModel {
    public _model: any
    private primaryCategorySchema: any
    constructor() {
        this.initialiseSchema()
        this._model = model('primaryCategory', this.primaryCategorySchema)
    }
    private initialiseSchema() {
        this.primaryCategorySchema = new Schema({
            name: {
                type: String,
                required: true
            },
            description: {
                type: String
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

export let primaryCategoryModel = new PrimaryCategoryModel()