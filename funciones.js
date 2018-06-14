function isEven(number) {
    return number % 2 == 0;
}

console.log(isEven(5));
console.log(isEven(4));

function sayHello() {
    console.log('Hello World');
};

sayHello();

function areEqual(a, b) {
    return a === b;          
};

console.log(areEqual(4, 5));
console.log(areEqual(5, 5));

var res = areEqual(4,4);
console.log(res);


function superEqual(a, b) {
    return a === b;          
}
console.log("Son iguales 4 y 5? " + superEqual(4,5));

console.log('Ejercicio 2');

var animal1 = {
    type: "Cat",
    weight: "2.5 kg.",
    alive: true
};

var animal2 = {
    type: "Dog",
    weight: "12 kg.",
    alive: false
};

var animal3 = {
    type: "Rat",
    weight: "400 gr.",
    alive: false
};

function objAnimal(dato) {  
    console.log('The ' + dato.type + '\'s weight is '+ dato.weight + " and is alive?: " + dato.alive);
};
objAnimal(animal1);
objAnimal(animal2);
objAnimal(animal3);

console.log('Ejercicio 3');
var prs1 = {
    name: "Diego",
    surname: "Andrades",
    edad: 41
};
var prs2 = {
    name: "Juanma",
    surname: "Rojas",
    edad: 35
};
var prs3 = {
    name: "Juan Antonio",
    surname: "Jiménez",
    edad: 37
};

function laPersona(params) {
    var msg = params.name + " se apellida " + params.surname + " y su edad es " + params.edad;
    console.log(msg);
    return params.edad;
}

// Esto es una declaración de un array y le cargo la colección de objetos
var todasLasPersonas = [prs1, prs2, prs3];

console.log('Esto lo pinta mediante un "for"');
//Esto es un bucle "for", que tiene 3 partes, la primera es la iniciación con la variable de control "i", 
//el segundo es la condición que se tiene que cumplir para que el bucle siga ejecutando y 
//la tercera es el incremento necesario para el bucle.
for (let i = 0; i < todasLasPersonas.length; i++) {
    //Cada vez que recorre el bucle ejecuta la función y pinta el mensaje con los datos de la colección
    //en la posición del índice del bucle
    laPersona(todasLasPersonas[i]);    
}

console.log('Esto lo pinta mediante un "while"');
var e = 0;
while (e < todasLasPersonas.length) {
    laPersona(todasLasPersonas[e]);
    e++;
}

console.log("Esto es un string que mide " + 'Esto es un string que mide xx caracteres'.length + " caracteres");
