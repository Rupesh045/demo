const mongoose = require('mongoose')
require('dotenv').config()


class mongoDB {

    constructor() {
        this.mongoConnect()
    }
    async mongoConnect() {
        try {
            await mongoose.connect(process.env.MONGO_STRING, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            });
            console.log('MongoDB connected successfully')
        } catch (error) {
            throw error
        }
    }
}
export let mongo = new mongoDB()