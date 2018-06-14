"use strict";

let aves = ["avestruz", "pinguino", "pato", "loro"];
let voladores = ["loro", "mariposa", "pez volador", "pato"];
let nadadores = ["ballena", "pinguino", "pez volador", "pato"];


//DIFERENCE
class miSet extends Set {
    constructor(...args){
        super(...args);
    }
    diferencia(setB) {
        var diferencia = new miSet(this);
        for (var elem of setB) {
            if(this.has(elem)) {
                diferencia.delete(elem);
            }
        }
        return diferencia;
    }
    intersection(setB) {
        var intersection = new miSet();
        for (var elem of setB) {
            if(this.has(elem)) {
                intersection.add(elem);
            }
        }
        return intersection;
    }
    union(setB) {
        var union = new miSet(this);
        for (var elem of setB) {
            union.add(elem);
        }
        return union; 
    }
} 

let setAves = new miSet(aves);
let setVoladores = new miSet(voladores);
let setNadadores = new miSet(nadadores);

let avesVoladoras = setAves.intersection(setVoladores);
console.log('aves que vuelan');
console.log(avesVoladoras);

let voladores_aves_noNadan = avesVoladoras.diferencia(setNadadores);
console.log('aves que vuelan pero no nadan');
console.log(voladores_aves_noNadan);

let avesVoladoasNadadoras = setAves.intersection((setNadadores.intersection(setVoladores)));
console.log('aves voladoras y nadadoras');
console.log(avesVoladoasNadadoras);

let nadadoresNoAves = setNadadores.diferencia(setAves);
console.log('Que nadan pero no son aves');
console.log(nadadoresNoAves);

let voladoresNadadores = setVoladores.intersection(setNadadores);
console.log('animales voladores y nadadores');
console.log(voladoresNadadores);

let voladoresNadadoresNoAves = voladoresNadadores.diferencia(setAves);
console.log('Que vuelan o nadan y no son aves');
console.log(voladoresNadadoresNoAves);
 