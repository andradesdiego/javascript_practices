"use strict";

//Dividir un Array en dos partes
const arr1 = [0,1,2,3,4,5,6,7,8,9,10];
//Desde posición 0, hasta la posicion 8 del array
const part1 = arr1.slice(0,8);
//Desde posición 8 hasta el final
const part2 = arr1.slice(8);
//Desde posicion 8 hasta el final que es length
const part2b = arr1.slice(8, arr1.length);
//Desde la posicion param1 hasta la posicion param2(sin incluir valor en param2)
const part3 = arr1.slice(3,7);

console.log(part1);
console.log(part2);
console.log(part2b);
console.log(part3);

//Concatenar
const arrA = [0,1,2,3,4,5,6];
const arrB = [7,8,9,10];
let merged = [];
for(let e of arrA){
    merged.push(e)
}
for(let e of arrB){
    merged.push(e)
}
console.log(merged);

//ES6 Combinar o concatenar
let arr1x = [4,5,6,7,8,9,10];
let arr1y = [0,1,2,3,4];
const combinado = [...arr1x, ...arr1y];
console.log(combinado);

//Divide un array en 3 partes
//Concatena las 3 partes en orden invertido

const arr5 = [0,1,2,3,4,5,6,7,8,9,10];
let arrP3 = arr5.slice(0, Math.round(arr5.length/3));
console.log(arrP3);
let arrP2 = arr5.slice(Math.round(arr5.length/3),Math.round(2*arr5.length/3));
console.log(arrP2);
let arrP1 = arr5.slice(Math.round(2*arr5.length/3), arr5.length);
console.log(arrP1);

let arrOrdenado = [...arrP3, ...arrP2, ...arrP1];
let arrInvertido = [];
for(let i=arrOrdenado.length;i>0;i--){ 
    arrInvertido.push(arrOrdenado[i]);
}
console.log(arrInvertido);

//Inserta un elemento nuevo en la mitad de un array
//Pon el string "MITAD" en el nuevo elemento
const miArray = [0,1,2,3,4,5,6,7,8,9,10];
let arrMitad1 = miArray.slice(0, Math.round(miArray.length/2));
let arrMitad2 = miArray.slice(Math.round(miArray.length/2));
let completo = [...arrMitad1, "MITAD", ...arrMitad2];
console.log(completo);










//////////SPLICE//////////
//En la medida de lo posible, no lo usamos. Es bastante complejo
//y su comportamiento es un tanto aleatorio, en fx de los parámetros que le pasemos.

