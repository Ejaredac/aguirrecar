function pasarMayuscula(cadena) {
    let may = cadena.toUpperCase();
    return may;
}
function quitarEspacios(params) {
    return params.trim();
}
function obtenerLongitud(cadena) {
    return cadena.length;
}

exports.pasarMayuscula = pasarMayuscula;
exports.quitarEspacios = quitarEspacios;
exports.obtenerLongitud = obtenerLongitud;