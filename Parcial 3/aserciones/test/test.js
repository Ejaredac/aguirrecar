let funciones = require ('../src/funciones');
let chai = require('chai');
let shoul = chai.should()
let expect = chai.expect;
let assert = chai.assert;

describe('Pruebas de la funcion potencia (should)',function(){
    it('Deberia regresar un numero y debe ser el numero 27',function()
    {
        let resultado = funciones.potencia(3,3);
        resultado.should.be.a('number');
        resultado.should.equal(27);
    })
})

describe('Pruebas de la funcion potencia (expect)',function(){
    it('Deberia regresar un numero y debe ser el numero 27',function()
    {
        let resultado = funciones.potencia(3,3);
        expect(resultado).to.be.a('number');
        expect(resultado).to.equal(27);
    })
})

describe('Pruebas de la funcion potencia (assert)',function(){
    it('Deberia regresar un numero y debe ser el numero 27',function()
    {
        let resultado = funciones.potencia(3,3);
        assert.typeOf(resultado, 'number');
        assert.equal(resultado, 27);
    })
})
console.log(funciones.potencia(3,3));