// "use strict";

// class Animal {
//     constructor(serVivo) {
//         this._tipo = "mamífero";
//         this.peso = "";
//         this.nombre = "";
//     }
// };

// class Rata extends Animal {
//     constructor(peso,nombre){
//         super(peso,nombre);
//     }
// }
// class Gato extends Animal {
//     constructor(peso,nombre) {
//         super(peso,nombre);
//     }
// }
// class Perro extends Animal {
//     constructor(peso,nombre){
//         super(peso,nombre);
//     }
// }

// let Mickey = new Rata (2,"Mickey");
// console.log(Mickey);

class Animal {
    constructor(tipo, peso, nombre)
    {
        this._tipo = tipo;
        this.peso = peso;
        this.nombre = nombre;
    }
    get tipo(){
        return this._tipo;
    }
}

class Gato extends Animal {
    constructor(peso, nombre)
    {
        super("Gato", peso, nombre);
    }
}

class Perro extends Animal {
    constructor(peso, nombre)
    {
        super("Perro", peso, nombre);
    }
}

class Rata extends Animal {
    constructor(peso, nombre)
    {
        super("Rata", peso, nombre);
    }
}

const oGato = new Gato(3.3, "Felino");
console.log(oGato.tipo + " " + oGato.peso + " " + oGato.nombre); // Gato 3.2 Felino

const oPerro = new Perro(7.1, "Fido");
console.log(oPerro.tipo + " " + oPerro.peso + " " + oPerro.nombre); // Perro 7.1 Fido

oPerro.tipo = "Leon"; //Excepcion: TypeError: Cannot set property tipo of #<Perro> which has only a getter
