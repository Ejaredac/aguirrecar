let express = require('express');
let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '19100140'
});

const app = express()

app.use(express.text());
app.use(express.json());

app.get('/libro/:idlibro', (req, res) => {
    connection.connect();
    
    connection.query('SELECT * FROM libro where idlibro = ' + req.params.idlibro + ' ;', function (error, results, fields) {
        console.log(results);
        res.json(results);
    })
    connection.end()
});

app.listen(8082, () => {
    console.log('Escuchando en el puerto 8082')
});