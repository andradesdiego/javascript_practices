//Declara una funcion que compara dos valores;
//si son totalmente lo mismo devuelve true;
//si son distintos devuelve false;
function superEqual(a,b) {
    var result;
    if (a === b) {
        result =  true;
    } else {
        result = false;} 
    console.log("los valores son " + result);
}
superEqual(5,"5");

//Declara una fx que recibe un objeto tipo animales
//Saca por consola el tipo de animal, cuanto pesa y si esta vivo.
//No devuelve ningun valor.

var gato = {tipo:"mamifero", peso:2.5, vivo:true};
function imprimeAnimal(animal) {
    console.log("El animal es " + animal.tipo + ", pesa " + 
    animal.peso + " kg y está vivo? " + animal.vivo);
} 
imprimeAnimal(gato);

//Declara una fx que recibe un string
//La funcion retorna true si el string es igual a "verdad"
//La funcion retorna false si no es igual a "verdad"

function esVerdad(string) {
    if (string === "verdad") {
        return true;
    } return false;
}
console.log("el texto es verdad?? " + esVerdad("verdad"));

function esVerdad2(string) {
    if (string === "verdad") {
        return true;
    } else if (string === "falso"){
        return false;
    } return;
}
console.log("el texto es verdad o falso?? " + esVerdad2());

//fx que recibe un array de numeros
//retorna otro arry con los números impares

var elArray = [3, 43, 54, 48, 92, 84, 95, 7, 4, 8];
function impares(num) {
    var pos = 0;
    var nuevoArray = [];
    while (pos < num.length) {
        if (num[pos]%2 != 0) {
            nuevoArray.push(num[pos]);
            //console.log(num[pos]);
        }  pos++;
    } 
    console.log(nuevoArray);
    return nuevoArray;
}
impares(elArray);  



f = (msg) => {console.log(msg)};

f("hola");