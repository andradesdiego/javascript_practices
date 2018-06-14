"use strict";

class FistClass {

}

let fc1 = new FistClass();
let fc2 = new FistClass();
console.log(fc1 instanceof FistClass); //instanceof -> ¿es esto una instacia de aquel?
console.log(typeof fc1); //'object'
console.log(fc1 instanceof Date);
console.log(fc1 === fc2);



class FechaSimple {
    constructor(dia, mes, ano){
        this._dia = dia;
        this._mes = mes;
        this._ano = ano;
    }
    anadirDias(nDias){
        //Aumentar los días con nDias y validar aquí
        this._dia = this._dia + nDias;
    }
    obtenerDia(){
        return this._dia;
    }
    get mes(){
        return this._mes;
    }
    set cambiarDia(dia){
        return this._dia = dia;
    }
}
let hoy = new FechaSimple(26, 12, 1976); // Garantiza que se inicializa correctemente
hoy.anadirDias(1); 
console.log(hoy.obtenerDia());
hoy.cambiarDia = 18;
console.log(hoy._dia);
console.log(hoy.mes);



