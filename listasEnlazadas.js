"use strict";

let n6 = { value: 11, tail: null};
let n5 = { value: 21, tail: n6};
let n4 = { value: 11, tail: n5};
let n3 = { value: 2, tail: n4};
let n2 = { value: 2, tail: n3};
let n1 = { value: 1, tail: n2};

let stringJSON = JSON.stringify(n1, null, 3);
console.log(stringJSON);

let obj = JSON.parse(stringJSON);
console.log(obj);



