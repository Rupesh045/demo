import { mongo } from "./database/mongoDB"
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const productRoutes = require('./routes/product')
const primaryCategoryRoutes = require('./routes/primaryCategory')
const secondaryCategoryRoutes = require('./routes/secondaryCategory')
const tertiaryCategoryRoutes = require('./routes/tertiaryCategory')

export class App {
    constructor() {
        this.onInit()
    }
    async onInit() {
        const port = process.env.PORT || 4000
        app.use(cors())
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        mongo
        app.listen(port, () => {
            console.log(`port is connected to ${port}`)
        })
        app.use('/apis', productRoutes)
        app.use('/apis', primaryCategoryRoutes)
        app.use('/apis', secondaryCategoryRoutes)
        app.use('/apis', tertiaryCategoryRoutes)
        app.use(cookieParser())
    }
}

export let nodeApp = new App()