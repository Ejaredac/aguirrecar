const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({origin:"http://localhost"}))
app.get('/',(req,res)=>{
    //res.send('Servidor express contestando el get');
    res.sendFile('./static/index.html',{root:__dirname},(err)=>{console.log('Archivo enviado correctamente')});
});
app.post('/',(req,res)=>{
    res.json({usuario:'Eduardo'});
});
app.listen(8082,(req,res)=>{
    console.log('Servidor express excchando en el puert 8082');
    console.log(__dirname);
    console.log(__filename);
});
app.use((req,res)=>{
    res.status(404).sendFile('./static/404.html',{root:__dirname});
});