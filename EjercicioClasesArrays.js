function combinarOrdenado(listaA, listaB) {
    //Donde guardar el resultado
    const combinado = new Lista();

    while (listaA.hayMas() && listaB.hayMas()) { //Si en los dos hay mas
        if (listaA.valorActual < listaB.valorActual) {
            combinado.push(listaA.cogerActual());
        }
        else {
            combinado.push(listaB.cogerActual());
        }
    }
    if (listaA.hayMas()) {
        while (listaA.hayMas()) { // Si todavia hay mas en A
            combinado.push(listaA.cogerActual());
        }
    }
    if (listaB.hayMas()) {
        while (listaB.hayMas()) { // Si todavia hay mas en B
            combinado.push(listaB.cogerActual());
        }
    }
    return combinado; //Retornar
}
//Simplificado
function combinarOrdenado(listaA, listaB) {
    //Donde guardar el resultado
    const combinado = new Lista();

    while (listaA.hayMas() && listaB.hayMas()) { //Si en los dos hay mas
        if (listaA.valorActual < listaB.valorActual) {
            combinado.push(listaA.cogerActual());
        }
        else {
            combinado.push(listaB.cogerActual());
        }
    }
    while (listaA.hayMas()) { // Si todavia hay mas en A
        combinado.push(listaA.cogerActual());
    }
    while (listaB.hayMas()) { // Si todavia hay mas en B
        combinado.push(listaB.cogerActual());
    }
    return combinado; //Retornar
}

//Ahora solo falta la clase Lista...
//Creamos las clases

class Lista {
    constructor(array) {
        this._array = array || [];
        this._posicionActual = 0;
    }
    hayMas() {
        return this._posicionActual < this._array.length;
    }
    get valorActual() {
        return this._array[this._posicionActual];
    }
    cogerActual() {
        return this._array[this._posicionActual++];
    }
    push(valor) {
        this._array.push(valor);
    }
}

//Alternativa, extendiendo el clase Array
class Lista extends Array {
    constructor(args) {
        if (args && args instanceof Array) //Si recibimos un array
            super(...args); //Pasa los elementos individuales al constructor de Array
        else
            super(); //Crea uno vacio
        this._posicionActual = this.length?0:undefined; //Si no hay elementos, no hay posicion
    }
    hayMas() {
        return this._posicionActual < this.length;
    }
    get valorActual() {
        return this[this._posicionActual];
    }
    cogerActual() {
        return this[this._posicionActual++];
    }
}

//Comprueba lo todo junto
const listaA = new Lista([1, 3, 8, 9, 11, 18]);
const listaB = new Lista([2, 5, 9, 10, 12]);
const ordenado = combinarOrdenado(listaA, listaB);
console.log(...ordenado);
