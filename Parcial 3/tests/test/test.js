let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect; 
chai.use(chaiHttp);

const url = 'http://localhost:8082';
// Encapsular en test dentro de la funcion describe() Y describirmos el test
describe('Inserta un libro: ', () => {
    it('deberia insertar in libro', (done) => {
        // En la funcion it() lo que deberia hacer             
        chai.request(url)
            .post('/libro')
            .send({ nombrelibro:'Millar', gusto:'Todo', genero:'Cienciaficcion', personajefav:'Olicus', arcofav:'Lavenidadelastormentas' ,adult:true ,calificacion:88,recomendacion:true})
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.text).to.be.a('string')
                done();
            });
    });
});
describe('Obtiene libros: ', () => {
    it('Deberia obtener todos los libros', (done) => {
        chai.request(url).get('/libro').send().end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            done();
        });
    });
});