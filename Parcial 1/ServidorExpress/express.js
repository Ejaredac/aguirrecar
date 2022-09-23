const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const finalhandler = require('finalhandler');
const fs = require('fs');
const path = require('path');
const http = require('http');

const app = express();


app.use(cors({ origin: "http://localhost" }));
app.use(express.text());
app.use(express.json());

//app.use(morgan('combined'));
var accesslogstream = fs.createWriteStream(path.join(__dirname,'access_log'),{flags:'a'});

app.use(morgan('combined',{stream:accesslogstream}))


app.get('/', (req, res) => {
    //res.send('Servidor express contestando el get');
    res.sendFile('./static/index.html', { root: __dirname }, (err) => { console.log('Archivo enviado correctamente') });
});

app.post('/', (req, res) => {
    res.json({ usuario: 'Eduardo' });
});

app.post('/json', (req, res) => {
    console.log(req.body.nombre);
    res.json(req.body.nombre);
});

app.listen(8082, (req, res) => {
    console.log('Servidor express excchando en el puert 8082');
    console.log(__dirname);
    console.log(__filename);
});

app.use((req,res,next) =>{
    console.log('Estes es un middleware');
    next();
},(req,res,next)=>{
    console.log('Este es el segundo middleware');
});

app.use((req, res) => {
    res.status(404).sendFile('./static/404.html', { root: __dirname });
});

