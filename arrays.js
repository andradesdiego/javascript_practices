var myArrayStrings = ["Uno", "Dos", "Tres", "Cuatro", "Cinco"];
var myArrayNumbers = [34, 765, 93, 554, 453, 33, 5];


function pintarArray(arr) {
    var pos = 0;
    while (pos < arr.length) {
        console.log(arr[pos++]);       
    }
}
//pintarArray(myArrayNumbers);
//pintarArray(myArrayStrings);

// arrowPintar((array) => {
//     var pos = 0;
//     while (pos < array.length) {
//         console.log(arr[pos++]);       
//     }
// })
// arrowPintar(myArrayStrings);

// var hello = "Hello";
// var firstLetter = hello[0];

// pos = 0;
// while (pos < hello.length) {
//     console.log("la letra en la posición " + pos + " es " + hello[pos++]);

// }
// Le puedo pasar un string a la función pintarArray?? SI!!!
//pintarArray(hello);

var animal1 = {
    type: "Cat",
    weight: 2,
    alive: true
};

var animal2 = {
    type: "Dog",
    weight: 12,
    alive: false
};

var animal3 = {
    type: "Rat",
    weight: 1,
    alive: false
};
 var animales = [animal1, animal2, animal3];

function sumPesoAnims(animal) {
    var pos = 0;
    var suma = 0;
    while (pos < animal.length) {  
        suma += animal[pos].weight;
        pos++;
    }
   return suma;
}
//sumPesoAnims(animales);

// var laSuma = sumPesoAnims(animales);
// console.log(laSuma);

var todosLosNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function devuelveImpares(arr) {
    var pos = 0;
    var soloImpares = [];
    while (pos < arr.length) {
        if (arr[pos]%2 != 0) {
            soloImpares.push(arr[pos]);
        } 
        pos++;
    } return soloImpares;
}
console.log(devuelveImpares(todosLosNum));

// function devuelvePares(arr) {
//     var soloPares = [];
//     var pos = 0;
//     while (pos < arr.length) {
//         if (arr[pos]%2 === 0) {
//             soloPares.'push(arr[pos]);
//         } 
//         pos++;
    
//     } return soloPares;
// }
// console.log(devuelvePares(todosLosNum));

// function devuelvePares(arr) {
//     var soloPares = arr;
//     var pos = 0;
//     for (let pos = 0; pos < arr.length; pos++) {
//         if (arr[pos]%2 != 0) {
//             //soloPares.splice((arr[pos]-1), 1);
//             soloPares.splice(arr[pos], 1);
//         } 
//     } return soloPares;
// }
// console.log(devuelvePares(todosLosNum)); 

//Devuelve un array con los números impares, 
//dada un array que recibe la función por parámetro

// var todosLosNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function devImpares(coleccion) {
//     var impares = [];
//     var control = 0;
//     var posicion = control;
//     while (control < coleccion.length) {
//         posicion = control;
//         if (coleccion[posicion] % 2 != 0) {
//             impares.push(coleccion[posicion]);
//         } 
//         control++;
        
//     } return impares;
// } 
// console.log(devImpares(todosLosNum));

//Haz un programa que imprima los múltiplos de 5 hasta 20 con while

// var hasta20 = [];

// function llenar(n) {
//     var control = 0;
//     while (control < 20) {
//         n.push(control);
//         control++;
//     } return n;
// } 
// console.log(llenar(hasta20));

// function multiplo(arr) {
//     var multiplos5 = [];
//     var control2 = 0;
//     while (control2 < arr.length) {
//         if (control2 % 5 === 0) {
//             multiplos5.push(arr[control2]);
//         }
//         control2++;
//     } return multiplos5;
// }
// console.log(multiplo(hasta20));

//Que imprima la suma de todos los números pares 
//que van del 1 al 100 y diga cuántos hay


function imprime1al100() {
    var numerosPares = 0;
    var control = 0;
    var contador = 0;
    while (control <= 100) {
        if (control % 2 === 0) {
            numerosPares += control;
            contador++;
        }
        control++;
    }
    console.log('Ha sumado ' + contador + " números");
    return numerosPares; 
}
console.log(imprime1al100());
//imprime1al100();


//9. Se introducen dos números y muestre todos 
//los números que van desde el primero al segundo. 
//Se debe controlar que los valores son correctos.

var num1 = 34;
var num2 = 43;

function pintarEntreNum(a, b) {
    var pos = a;
    while (pos <= b) {
        console.log(pos);
        pos++;
    }
}
pintarEntreNum(num1, num2);
