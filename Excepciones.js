"use strict";
//Cuando nos encuentra en una situación excepcional, 
//cuando no sabemos como recuperar, 
//ni tampoco que hacer, podemos lanzar una excepción.
// function ultimoElemento(array) {
//     if(array.length > 0)
//         return array[array.length - 1];
//     else 
//         throw "No se puede sacar el último elemento de un array vacío";
// }
// //console.log(ultimoElemento([]));
// //Así, hace falta una manera de 'coger' la excepción lanzado sin terminar la programa.
// //Para eso en JavaScript tenemos la combinación try/catch.
// try {
//     console.log(ultimoElemento([]));  //Intenta algo que puede lanzar una excepción.
// }
// catch(error) {
//     console.log(error);  //Si una excepcion fue lanzado dentro del bloque try, llegamos aqui  
//     throw error; //Lo guardamos antes, pero "siempre" paramos la ejecución del programa.
// }


//Controlar la instancia de una clase
class Fecha {
    constructor(dia, mes, ano) {
        //Si no son numeros
        if  (typeof dia != 'number' ||
            typeof mes != 'number' ||
            typeof ano != 'number'
        ) {
            throw new Error ("dia, mes o año no es un número!");
        }
    }
}

//let f= new Fecha(2,"Marzo",2018);

try {
    let f2 = new Fecha(2,"marzo",2018);
    console.log("Esto no ejecuta si hay una excepción");
}
catch(error) {
    console.log("EXCEPTION:" + error);    
}
finally
{
    //Si hay algo que debemos hacer, se ejecuta en este bloque. 
    //-siempre- haya error o no. Aquí llega siempre y se ejecuta.
    console.log("Excepcion o no, siempre esto");
}