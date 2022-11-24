const mysql2 = require('mysql2/promise');
const express = require('express');
const router = express.Router();
let connection = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '19100140'
});

/**
 * @swagger
 * paths:
 *   /libro/{idlibro}:
 *     get:
 *       parameters:
 *       - in: path
 *         type: Integer
 *         name: idlibro
 *         required: true
 *       description: Te da el libro especifico de su ID
 *       responses:
 *         200:
 *           description: Respuesta de un libro
 */
router.get('/:idlibro', async (req, res) => {
    
    const [ResponseDB] = await connection.query('SELECT * FROM libro where idlibro = ' + req.params.idlibro + ' ;');
    res.json(ResponseDB)
});

/**
 * @swagger
 * /libro:
 *   get:
 *     description: Bienvenido a los libros.
 *     responses:
 *       200:
 *         description: Respuesta de todos los libros
 */
router.get('', async (req, res) => {

    const [ResponseDB] = await connection.query('SELECT * FROM libro');
    //res.status(200);
    res.json(ResponseDB)
});



router.post('',async (req,res)=>{
    
    var nombrelibro = req.body.nombrelibro;
    var gusto = req.body.gusto;
    var genero = req.body.genero;
    var personajefav = req.body.personajefav;
    var arcofav = req.body.arcofav;
    var adult = req.body.adult;
    var calificacion = req.body.calificacion;
    var recomendacion = req.body.recomendacion;

    const [ResponseDB] = await connection.query(
        'Insert into libro (nombrelibro,gusto,genero,personajefav,arcofav,adult,calificacion,recomendacion) values (?,?,?,?,?,?,?,?)',[nombrelibro,gusto,genero,personajefav,arcofav,adult,calificacion,recomendacion]);
    //res.status(200);

    res.json(ResponseDB);
});


router.delete('/:idlibro',async (req,res)=>{
    const [ResponseDB] = await connection.query('delete FROM libro where idlibro = ' + req.params.idlibro + ' ;');
    res.json(ResponseDB);
});



router.patch('',async (req,res)=>{
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
        'UPDATE libro SET nombrelibro = ? , gusto = ? , genero = ? , personajefav = ? , arcofav = ? , adult = ?, calificacion = ? , recomendacion = ? WHERE idlibro = ? ;',[nombrelibro,gusto,genero,personajefav,arcofav,adult,calificacion,recomendacion,idlibro]);
        res.json(ResponseDB);
});

module.exports.router = router;