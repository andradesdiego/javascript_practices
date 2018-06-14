// function createMatrix(rows, columns) {
//     let matrix =  [];
//         for(r=0;r<rows;r++) {
//             let fila = newRow(columns);
//             matrix.push(fila);
//         }
//     return matrix;
// }

// function newRow(columns) {
//     let fila = [];
//         for (c=0;c<columns;c++) {
//             fila.push('X');
//         }
//     return fila;
// }
// console.log(createMatrix(5,7));

//Fx tabla de multiplicar
module.exports = function tablaMultip(r,c) {
    let tabla = [];
    for (let i = 1; i < r; i++) {
        let row = [];
        for (let y = 1; y < c; y++) {
            row.push(i*y);
        }
        tabla.push(row);
    }
    console.log(tabla);
    return tabla;
}
//tablaMultip(9,9);

// const measure = require("measure-duration");
// let duration = measure.measureCall(tablaMultip, 800,990);