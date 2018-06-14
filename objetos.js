var miObjeto = {};
console.log(typeof miObjeto);

miObjeto.name ="Diego";
miObjeto.age = "41";

console.log(miObjeto.name);
console.log(miObjeto.age);
console.log(miObjeto.name + " tiene " + miObjeto.age + " años.");

const Sueco = "Sueco";

var miObj2 = { name:"Josema", age:50};

console.log(miObj2.name + " tiene " + miObj2.age + " años.");

var miObj3 = {
    name:"Diego",
    age: 41,
    licencia: Sueco
};

console.log(miObj3.name + " tiene " + miObj3.age + " años y licencia " + miObj3.licencia);

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

console.log('The ' + animal1.type + "'s weight is " + animal1.weight + " and still alive: " + animal1.alive);
console.log('The ' + animal2.type + "'s weight is " + animal2.weight + " and still alive: " + animal2.alive);
console.log('The ' + animal3.type + "'s weight is " + animal3.weight + " and still alive: " + animal3.alive);

if (animal2.alive == true) {

    console.log('El perro está vivo');
    
} else {
    console.log('El perro está muerto');
    
};



