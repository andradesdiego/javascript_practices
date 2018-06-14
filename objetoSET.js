/*
let arr1 = [1,2,3,3,7,4,32,6,3,2,];
let set1 = new Set(arr1);

console.log(arr1.length);
console.log(set1.size);

//spread ... crea un array con los valores del conjunto (set)
let arrayOfSet = [...set1.values()];
console.log(arrayOfSet);

let strArray = arr1.join(".");
console.log(strArray);
//let strArray= arr1.join()

//UNIÓN
class SetEx extends Set {
    constructor(...args){
        super(...args);
    }
    union(setB) {
        var union = new SetEx(this);
        for (var elem of setB) {
            union.add(elem);
        }
        return union;
    }
}
let s1 = new SetEx([1,2,3,11]);
let s2 = new SetEx([4,11,7,21,8]);
let s3 = s1.union(s2);
console.log(s3);
console.log(...s3.values());
*/
//INTERSECCIÓN

class SetExInt extends Set {
    constructor(...args){
        super(...args);
    }
    intersection(setB) {
        var intersection = new Set();
        for (var elem of setB) {
            if(this.has(elem)) {
                intersection.add(elem);
            }
        }
        return intersection;
    }
    union(setB) {
        var union = new SetEx(this);
        for (var elem of setB) {
            union.add(elem);
        }
        return union; 
    }
} 
let s1 = new SetExInt([1,2,3,11]);
let s2 = new SetExInt([4,11,7,21,8]);
let s3 = s1.intersection(s2);
console.log(s3);
console.log(...s3.values());

/*
//DIFERENCE
class SetExDif extends Set {
    constructor(...args){
        super(...args);
    }
    diferencia(setB) {
        var diferencia = new Set(this);
        for (var elem of setB) {
            if(this.has(elem)) {
                diferencia.delete(elem);
            }
        }
        return diferencia;
    }
    intersection(setB) {
        var intersection = new Set();
        for (var elem of setB) {
            if(this.has(elem)) {
                intersection.add(elem);
            }
        }
        return intersection;
    }
    union(setB) {
        var union = new Set(this);
        for (var elem of setB) {
            union.add(elem);
        }
        return union; 
    }
} 
let s1 = new SetExDif([1,2,3,11]);
let s2 = new SetExDif([4,11,7,21,8]);
let s3 = s1.diferencia(s2);
let s4 = s2.diferencia(s1);
console.log(s3);
console.log(...s3.values());
console.log(s4);
console.log(...s4.values());

*/

