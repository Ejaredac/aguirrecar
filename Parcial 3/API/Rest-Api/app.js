import express from 'express'
import morgan from 'morgan'
import cors from 'cors'


import swaggerui from "swagger-ui-express";
import swaggerjs from "swagger-jsdoc";
import path from "path"
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const swaggerOptions = {
    definition: {
        openapi: '3.0.0', info: {
            title: 'API Bestias',
            version: '1.0.0',
        },
        servers: [
            {
                url: "http://localhost:8082"
            }]
        ,
    },
    apis: [`${path.join(__dirname, './routes/beasts.routes.js')}`],
};

import indexRoutes from './routes/index.routes.js'
import beastsRoutes from './routes/beasts.routes.js'

const app = express()


app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
const swaggerDocs = swaggerjs(swaggerOptions);
app.use("/api-docs",swaggerui.serve,swaggerui.setup(swaggerDocs));

app.use(indexRoutes)
app.use(beastsRoutes)

export default app