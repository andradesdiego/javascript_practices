"use strict";

class Libro  {
    constructor(titulo){
        this._titulo = titulo;
        this.guardarEn = "";
    }
};
class Estanteria {
    constructor(estante) {
        this._nombre = estante;
        this._coleccion = [];
    }
    guardaMe (Libro) {
        this._coleccion.push(Libro);
        Libro.guardarEn = this;
    }
    get libros() {
        return this._coleccion;
    }
};

let elPrincipito = new Libro ("El Principito");
let robinsonCrusoe = new Libro("Robinson Crusoe");

let estanteria1 = new Estanteria("Est-1");

estanteria1.guardaMe(elPrincipito);
estanteria1.guardaMe(robinsonCrusoe);
console.log(estanteria1.libros[0]);



