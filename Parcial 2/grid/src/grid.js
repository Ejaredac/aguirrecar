new gridjs.Grid({
    columns:['idlibro','nombrelibro','gusto','genero','calificacion'],
    server:{
        url:'http://localhost:8082/libro',
        then: data=>data.map(libro=>
            [libro.idlibro,libro.nombrelibro,libro.gusto,libro.genero,libro.calificacion])
    }

}).render(document.getElementById("wrapper"))