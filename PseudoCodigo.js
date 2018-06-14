

//Sacar por consola un string que invierta el valor de un string

//Tengo una palabra
let miString = "palindrome";
//Debo empezar por el final
let posInicio = miString.length;
//Pinto la última letra y repito el proceso hasta el principio
for (i = posInicio-1; i >= 0; i--) {
    console.log (miString[i]);
}


// for (i=1; i<=31 ; i++) {
//    if (i%2 != 0) {
//     console.log(i);
//    }
// }

for (i=1; i<=31; i+=2) {
     console.log(i);
 }

 let nombres = ["Mary", "Ana", "Belinda", "Maria", "Melisa"];

 for (i=0; i<nombres.length; i++) {
     let nombre = nombres[i];
     if (nombre[0] === "M") {
         console.log(nombre);
     }
 }


 function reverse(arr) {
    let nuevoArr = [];
    for (i=arr.length-1; i>=0; i--) {
         nuevoArr.push(arr[i]);
    }
    console.log("el array invertido es " + nuevoArr);  
    return nuevoArr;
 }
let arrayNums = [1, 3, 5, 7, 9];
reverse(arrayNums);
