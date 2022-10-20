import {createPool} from 'mysql2/promise';
import express from 'express';

const app = express();

let connection = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '19100140'
});
app.use(express.text());
app.use(express.json());


app.get('/libro/:idlibro', async (req, res) => {

    const [ResponseDB] = await connection.query('SELECT * FROM libro where idlibro = ' + req.params.idlibro + ' ;');
    res.json(ResponseDB)
});

app.post('/libro',async (req,res)=>{
    
    var nombrelibro = req.body.nombrelibro;
    var gusto = req.body.gusto;
    var genero = req.body.genero;
    var personajefav = req.body.personajefav;
    var arcofav = req.body.arcofav;
    var adult = req.body.adult;
    var calificacion = req.body.calificacion;
    var recomendacion = req.body.recomendacion;

    const [ResponseDB] = await connection.query(
        'Insert into libro (nombrelibro,gusto,genero,personajefav,arcofav,adult,calificacion,recomendacion) values (?,?,?,?,?,?,?,?)',[nombrelibro,gusto,genero,personajefav,arcofav,adult,calificacion,recomendacion])
    

    res.json(ResponseDB)
})
app.delete('/libro/:idlibro',async (req,res)=>{
    const [ResponseDB] = await connection.query('delete FROM libro where idlibro = ' + req.params.idlibro + ' ;');
    res.json(ResponseDB)
});
app.patch('/libro',async (req,res)=>{
    var idlibro = req.body.idlibro;
    var nombrelibro = req.body.nombrelibro;
    var gusto = req.body.gusto;
    var genero = req.body.genero;
    var personajefav = req.body.personajefav;
    var arcofav = req.body.arcofav;
    var adult = req.body.adult;
    var calificacion = req.body.calificacion;
    var recomendacion = req.body.recomendacion;

    const [ResponseDB] = await connection.query(
        'UPDATE libro SET nombrelibro = ? , gusto = ? , genero = ? , personajefav = ? , arcofav = ? , adult = ?, calificacion = ? , recomendacion = ? WHERE idlibro = ? ;',[nombrelibro,gusto,genero,personajefav,arcofav,adult,calificacion,recomendacion,idlibro])
        res.json(ResponseDB)
});
app.listen(8082, () => {
    console.log('Escuchando en el puerto 8082')
});