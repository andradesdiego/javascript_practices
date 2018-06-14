function pintarTriangulo(filas) {
    let almohadilla = "#";
    for (i=0; i<filas; i++) {
        console.log(almohadilla);
        almohadilla += "#";
    } return;
}
pintarTriangulo(10);

// var texto = "#"
// for (i=0; i<3; i++) {
//     console.log(texto);
//     texto += "#";
// }

function identar(espacios) {
    let spaces = "";
    for (i=0; i<espacios; i++) {
        spaces += " ";
    } 
    return spaces;
}
console.log('@' + identar(10) + "@");
console.log(identar(6) + 'Esto se está pintando identado');
console.log(identar(3).length === 3);