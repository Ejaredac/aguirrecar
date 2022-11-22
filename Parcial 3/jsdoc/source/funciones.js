/**
 * Funcion de elevacion de numeros
 * @param {Number} numerobase Numero que se va a elevar
 * @param {Number} exponente Potencia a la que se va a elevar el numero base
 * @returns Number Resultado del numero base elevado por el exponente
 */
export function potencia(numerobase,exponente){
    let numero = 1;
    for (let index = 0; index < exponente; index++) {
        numero =  numero * numerobase
    }
    return numero
}