// Crea una función que crea un array de 2 dimensiones, los parámetros columns y rows contiene los dos dimensiones.
// Primero crea un array vació normal matrix.
// Con un bucle for añadiendo rows cantidad de arrays vacíos al array matrix con push(...)
// Luego con un bucle anidado for, añadiendo columns cantidad de la letra "X" al cada array row.
// Retorna el array matrix

// function creaArr2d (rows, columns) {
//     let matriz = [];
//     for (ix=0;ix<rows;ix++) {
//         let fila = [];
//         for (iy=0;iy<columns;iy++) { 
//             fila.push("X");
//         } 
//         matriz.push(fila);
//     } 
//     console.log(matriz);
//     return matriz;
// }
// creaArr2d(3,4);

// Adapta la función anterior añadiendo otro parámetro letra que contiene
// el carácter que debe usar para llenar el matriz en ver de 'X'.
// Úsalo para crear un array con 40 filas y 80 columna 
// conteniendo solo espacios '  '. 

// function creaMatriz(rows,columns,character) {
//     let matriz = [];
//     for (ix=0;ix<rows;ix++) {
//         let fila = [];
//         for (iy=0;iy<columns;iy++) { 
//             fila.push(character);
//         } 
//         matriz.push(fila);
//     } 
//     console.log(matriz);
//     return matriz;
// }
// creaMatriz(4,8,"|")


// Crea una función que que escribe la palabra "Hello" 
// letra por letra en el array anterior, en fila 10, 
// empezando en columna 10 con la letra 'H' y 'e' en columna 11 etc.

// Fx que crea una matrix de rows y columns, le paso un string
// y la coor x e y donde quiero que se imprima ----¡5 parámetros!----
function creaMatriz(rows,columns,string, coor_x, coor_y) {
    let matriz = [];
    for (ix=0;ix<rows;ix++) {
        let fila = [];
        for (iy=0;iy<columns;iy++) { 
            fila.push(ix.toString() + "," + iy.toString());
        } 
        matriz.push(fila);
    } 
    for (i=0;i<string.length;i++) {
        let letra = string[i];
        matriz[coor_x][coor_y+i] = letra;
    }
    console.log(matriz);
    return matriz;
}
creaMatriz(10,10,"Jonas",4,2);

// const measure = require("measure-duration");
// let duration = measure.measureCall(creaMatriz,1000,1000,"Jonas",40,20);