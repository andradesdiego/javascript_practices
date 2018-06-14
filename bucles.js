var contador = 0;
var suma = 0;

while (contador < 10) {
    suma += contador++;
    //console.log(suma);
}
console.log('La suma total es ' + suma);

var numberOfItems= 0;

var myList = {};
myList[numberOfItems++] = "First";
myList[numberOfItems++] = "Second";
myList[numberOfItems++] = "Third";
myList[numberOfItems++] = "Fourth";

var pos = 0;
while (pos < numberOfItems) {
    // console.log(myList[pos]);
    // pos++;
    console.log(myList[pos++]);
}

var numberOfItems= 0;

// var myList = {};
// myList[numberOfItems++] = "First";
// myList[numberOfItems++] = "Second";
// myList[numberOfItems++] = "Third";
// myList[numberOfItems] = "Fourth";

// var pos = 0;
// while (pos <= numberOfItems) {
//     // console.log(myList[pos]);
//     // pos++;
//     console.log(myList[pos++]);
// }
console.log(myList[4]);

function nombreDia(numDia) {
    var diasDeLaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    var dia = diasDeLaSemana[--numDia];
    console.log('El día de la semana es '+ dia);
    return dia;
}
nombreDia(3);