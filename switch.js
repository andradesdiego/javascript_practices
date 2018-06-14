function nota(numero) {
    var calificacion;
    switch (numero) {
        case 0:
        case 1:
        case 2:
            calificacion = "Muy Deficiente";
            break;
        case 3:
        case 4:
            calificacion = "Insuficiente";
            break;
        case 5:
            calificacion = "Suficiente";
            break;
        case 6:
            calificacion = "Bien";
            break;
        case 7:
        case 8:
            calificacion = "Notable";
            break;
        case 9:
        case 10:
            calificacion = "Sobresaliente";
            break;
        default:
            calificacion = "No hay calificación";
    }
    return console.log("Tu calificación es: " + numero + " - " + calificacion);
}
// nota(0);
// nota(5);
// nota(10);
// nota(8);
// nota(11);

//Nombrar propiedades de objetos con nombre de números: notación corchetes []
var myList = {};

myList[0] = "Fist";
myList[1] = "Second";
myList[2] = "Third";
myList[3] = "Fourth";

var pos = 0;

console.log(myList[pos++]);
console.log(myList[pos++]);
console.log(myList[pos++]);
console.log(myList[pos++]);

