const mysql2 = require('mysql2/promise');
const express = require('express');
const cors = require('cors');
const ruta_libro = require('./router')
const app = express();

let connection = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '19100140'
});
app.use(cors({ origin: "http://localhost" }));
app.use(express.text());
app.use(express.json());
app.use('/libro',ruta_libro.router)

app.listen(8082, () => {
    console.log('Escuchando en el puerto 8082')
});