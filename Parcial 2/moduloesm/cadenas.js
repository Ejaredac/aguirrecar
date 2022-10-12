export function pasarMayuscula(cadena) {
    let may = cadena.toUpperCase();
    return may;
}
export function quitarEspacios(params) {
    return params.replace(/ /g,"");
}
export function obtenerLongitud(cadena) {
    return cadena.length;
}