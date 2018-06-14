"use strict";
//1. Lanza excepciones con mensajes que son instructivas para el usuario del clase
//2. Hacer llamadas comprobando todo los casos que has añadido
// class Fecha
// {
//     constructor(dia, mes, ano)
//     {
//         if  (typeof dia != 'number' || 
//             typeof mes != 'number' || 
//             typeof ano != 'number')
//            {
//                throw new Error("dia, mes o ano no es un numero!");
//            }
//         //MAS AQUI!!!
//         if ( dia <= 0 || dia > 31){
//             throw new Error("El número del día no es válido");
//             console.log("EXCEPTION:" + error);    
//         }
//         if (mes <= 0 || mes > 12){
//             throw new Error("El número del mes no es válido");
//             console.log("EXCEPTION:" + error);    
//         }
//         if (ano <= 0 || ano > 2018){
//             throw new Error("El número del año no es válido");
//             console.log("EXCEPTION:" + error);    
//         }
//         this._dia = dia;
//         this._mes = mes;
//         this._ano = ano;
//     }
// }
//     try {
//     //let miFecha = new Fecha(21,"Marzo",1976);
//     //let miFecha = new Fecha(21,3,1976);
//     //let miFecha = new Fecha(41,3,1976);
//     //let miFecha = new Fecha(21,13,1976);
//     let miFecha = new Fecha(21,3,-1976);
//     console.log('La fecha ha pasado las excepciones');
//     } 
//     catch(error) {
//         console.log("EXCEPTION:" + error);  
//     }
  