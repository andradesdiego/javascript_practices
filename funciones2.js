function numDia(nombreDia) {
    let numeroDia;
    var diasDeLaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    var pos = 0;
    while (pos < diasDeLaSemana.length) {
        if (nombreDia === diasDeLaSemana[pos]) {
            numeroDia = ++pos;
        }
        pos++;
    }
    console.log("El número del día de la semana es " + numeroDia);
    return numeroDia;
}
numDia("Lunes");

//En esta fx estoy usando notacion de corchetes.
//Esto implica que llamo a la propiedad del objeto pasando el valor del parámetro
//Había intentado llamarlo con . pero devuelve undefined
//Esto se debe a que no existe la propiedad que intento buscar
//Para esto se usa la notación de corchetes... para sustituir el valor recibido por el nombre de la propiedad
function ordinalDayOfTheWeek(nombreDia) {
    let semObj = {Lunes:1, Martes:2, Miercoles:3, Jueves:4, Viernes:5, Sabado:6, Domingo:7};
    console.log("Llamo a prop con string del parametro. El número del día de la semana es " + semObj[nombreDia]);
    return semObj[nombreDia];
}
ordinalDayOfTheWeek("Martes");


var original = ["Juanma", "Juan Antonio", "Diego"];
var duplicado = [];
function duplicaArr(arr) {
    for (i = 0; i<arr.length; i++) {
        duplicado.push(arr[i]);
    }
    console.log(duplicado);
    return duplicado;
}
duplicaArr(original);

let devuelveImpares = (arr) => {
    let arrImpares = [];
    for (i=0; i<arr.length; i++) {
        if (arr[i] % 2 != 0) {
            arrImpares.push(arr[i]);
        }
    }
    return arrImpares;
}
let arrayNumeros = [1, 2, 3, 4, 5, 6, 7];
console.log(devuelveImpares(arrayNumeros));

let invierteOrden = (arr) => {
    let arrAlReves = [];
    for (i=0; i<arr.length; i++) {
        arrAlReves.unshift(arr[i]);
    }
    return arrAlReves;
}
let arrOrdenado = [2, 3, 4, 5, 6, 7, 8];
console.log("Primer array invertido " + invierteOrden(arrOrdenado));

let invierteOrden2 = (arr) => {
    let arrAlReves = [];
    for (i=arr.length-1; i >= 0; i--) {
        arrAlReves.push(arr[i]);
    }
    return arrAlReves;
}
console.log("Segundo array invertido " + invierteOrden2(arrOrdenado));


