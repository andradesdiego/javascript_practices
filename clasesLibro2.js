"use strict";
//solución de Jonas
class Libro {
    constructor(titulo) {
        this._titulo = titulo;
    }

    get titulo() {
        return this._titulo;
    }
    get estanteria() {
        return this._estanteria;
    }
    guardameEn(estanteria) {
        this._estanteria = estanteria;
        this._estanteria.libros.push(this);
    }
}

class Estanteria {
    constructor(nombre)
    {
        this._nombre = nombre;
        this._libros = [];
    }
    get nombre(){
        return this._nombre;
    }
    get libros()
    {
        return this._libros;
    }
}

let libro1 = new Libro("Libro1");
let libro2 = new Libro("Libro2");

let estanteria1 = new Estanteria("e1");

libro1.guardameEn(estanteria1);
libro2.guardameEn(estanteria1);
console.log(libro1.estanteria.nombre); // e1
console.log(estanteria1.libros.length); // 2
console.log(estanteria1.libros[0].titulo); // Libro1