
import chai  from 'chai';
import chaiHttp from "chai-http";
const expect = chai.expect 
chai.use(chaiHttp);

const url = 'http://localhost:8082';
// Encapsular en test dentro de la funcion describe() Y describirmos el test
describe('Crea una bestia: ', () => {
    it('deberia crear una bestia', (done) => {
        // En la funcion it() lo que deberia hacer             
        chai.request(url)
            .post('/bestias')
            .send({nombre:"Leimos Omega 1",
            descripcion:"Un supremo mounstruo que requiere ser domado",
            origen:"El mas macabro de todos",
            locacion:"En los confines del tiempo",
            habilidades:"Todas",
            afiliacion:"El octal maligno",
            namenaza:9999})
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json
                done();
            });
    });
});
describe('Invocar a esa bestia: ', () => {
    it('Deberia invocar a la bestia', (done) => {
        // En la funcion it() lo que deberia hacer             
        chai.request(url)
            .get('/bestias/63897f96118db1987160f2ba')
            .send()
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json
                done();
            });
    });
});
describe('Invocar todas las bestias: ', () => {
    it('Deberia invocar todas las bestias', (done) => {
        // En la funcion it() lo que deberia hacer             
        chai.request(url)
            .get('/bestias')
            .send()
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json
                done();
            });
    });
});

describe('Mutar esa bestia: ', () => {
    it('Deberia mutar esa bestia', (done) => {
        // En la funcion it() lo que deberia hacer             
        chai.request(url)
            .put('/bestias/63897f96118db1987160f2ba')
            .send({nombre:"Leimos Alfa 7",
            descripcion:"Un supremo mounstruo que requiere ser domado",
            origen:"El mas macabro de todos",
            locacion:"En los confines del tiempo",
            habilidades:"Todas",
            afiliacion:"El octal maligno",
            namenaza:9999})
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json
                done();
            });
    });
});

describe('Matar a bestia: ', () => {
    it('Deberia matar a esa bestia', (done) => {
        // En la funcion it() lo que deberia hacer             
        chai.request(url)
            .delete('/bestias/63894c029f41a675511c9519')
            .send({nombre:"Leimos Alfa 7",
            descripcion:"Un supremo mounstruo que requiere ser domado",
            origen:"El mas macabro de todos",
            locacion:"En los confines del tiempo",
            habilidades:"Todas",
            afiliacion:"El octal maligno",
            namenaza:9999})
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json
                done();
            });
    });
});