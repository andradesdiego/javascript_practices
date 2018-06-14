"use strict";

let o = {
    first: 1,
    second: 3,
    "3": "Third"
};
let oStr = JSON.stringify(o, 4, null);
console.log(oStr);

//Construyendo con un clase, agregando en bucle
class Node {
    constructor(value, tail) {
        this.value = value;
        this.tail = tail ? tail : null;
    }
    addTail(value) {
        this.tail = new Node(value, null);
        return this.tail;
    }
}

let myList = new Node(0);
let last = myList;
for (let i = 1; i < 10; i++) {
    last = last.addTail(i);
}

console.log(JSON.stringify(myList, null, 4));