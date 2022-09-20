const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({origin:"http://localhost"}))
app.get('/',(req,res)=>{
    res.send('Servidor express contestando el get');
});
app.post('/',(req,res)=>{
    res.send('Hiciste post al server de express');
});
app.listen(8082,(req,res)=>{
    console.log('Servidor express excchando en el puert 8082');
});