console.log("conectado");

var miNombre = "Diego";
var miEdad = "41";

console.log("Su nombre es " + miNombre + " y su edad es " + miEdad);

var decadas = Math.floor(miEdad/10);
var años = miEdad%10;
var edadIncrementada = miEdad;


console.log(miNombre + " tiene " + decadas + " décadas y " + años + " año");
console.log("y el año que viene tendrá " + ++miEdad + 
            " aunque el año pasado tuvo " + --miEdad);


