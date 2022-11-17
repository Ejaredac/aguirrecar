const mysql2 = require('mysql2/promise');
const express = require('express');
const cors = require('cors');
const ruta_libro = require('./rutas/router')
const app = express();
const swaggerui = require('swagger-ui-express');
const swaggerjs = require('swagger-jsdoc');
const path = require('path');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0', info: {
            title: 'API Libros',
            version: '1.0.0',
        },
        servers: [
            {
                url: "http://localhost:8082"
            }]
        ,
    },
    apis: [`${path.join(__dirname, "./rutas/router.js")}`],
};


app.use(cors({ origin: "http://localhost" }));
app.use(express.text());
app.use(express.json());
app.use('/libro', ruta_libro.router);
const swaggerDocs = swaggerjs(swaggerOptions);
app.use("/api-docs",swaggerui.serve,swaggerui.setup(swaggerDocs));


app.listen(8082, () => {
    console.log('Escuchando en el puerto 8082');
});