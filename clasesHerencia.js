class Criatura {
    constructor(tipo){
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
}
class Mamifero extends Criatura {
    constructor() {
        super("Felino"); //Llama al constructor de su 'progenitora'
        console.log(this.tipo);
    }
}
let gato = new Mamifero();
console.log(gato.tipo);
