import { model, Schema } from "mongoose"

class SecondaryCategoryModel {
    public _model: any
    private seconadyCategorySchema: any
    constructor() {
        this.initialiseSchema()
        this._model = model('secondaryCategory', this.seconadyCategorySchema)
    }
    private initialiseSchema() {
        this.seconadyCategorySchema = new Schema({
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
export let secondaryCategorySchema = new SecondaryCategoryModel()