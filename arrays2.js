//usando un array com una pila
//arr.push(elemento): Introduce el elemento en la ultima posicion del array
//arr.pop() saca el ultimo elemento del array
//arr.shift() saca el primer elemento del array

var arr = [1,2,3,4,5];


//USANDO UN ARRAY COMO UNA PILA
arr.push(6); //meto el 6
arr.pop(); //saco el 6
//USANDO EL ARRAY COMO UNA COLA
arr.shift(); //saco el 1
console.log(arr); //pinta [2,3,4,5]
// .map mapea el array aplicando una fx a cada elemento del array
arr.map(console.log);
// 2 0 [ 2, 3, 4, 5 ]
// 3 1 [ 2, 3, 4, 5 ]
// 4 2 [ 2, 3, 4, 5 ]
// 5 3 [ 2, 3, 4, 5 ]
function sumaUno(param){
    param += 1;
    return param;
}
console.log(arr.map(sumaUno));
//[ 3, 4, 5, 6 ]
