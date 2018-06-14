var ahora = new Date();
console.log(ahora);
console.log(ahora.toLocaleTimeString());
console.log(ahora.getDate());
console.log(ahora.getMonth());

console.log(Date.now());

//var ahoraMilis = Date.now();
//5 segundos en el futuro
// var tiempoLimite = ahoraMilis + (5 * 1000);
// console.log('Empezar la espera...');
// while (ahoraMilis<tiempoLimite) {
//     ahoraMilis = Date.now ();
// }
// console.log("Termino la espera...");


// function wait(segundos) {
//     var momentoActual = Date.now();
//     var momentoFinal = momentoActual + (segundos * 1000)
//     while (momentoActual<momentoFinal) {
//         momentoActual = Date.now();
//     } return;
// } 
// console.log('Empieza la espera...');
// wait(5);
// console.log('La espera ha terminado...');
// var vueltas = 0;
// function wait(segundos) {
//     var momentoActual = Date.now();
//     var momentoFinal = momentoActual + (segundos * 1000)
//     while (momentoActual<momentoFinal) {
//         momentoActual = Date.now();
//         vueltas++;
//     } return;
// } 
// console.log('Empieza la espera...');
// wait(3);
// console.log('La espera ha terminado...');
// console.log('Se han dado ' + vueltas + " vueltas");
// console.clear();

function waitUntil(waitInSeconds) {
    var ahoraMilis = Date.now();
    //5 segundos en el futuro
    var tiempoLimite = ahoraMilis + (waitInSeconds * 1000);

    while (ahoraMilis<tiempoLimite) {
        var falta = tiempoLimite - ahoraMilis;
        if (falta % 100 == 0) {
            console.clear();
            console.log("\n\n\n\n\n\n\t\t\t\t" + falta / 1000);
        }
        ahoraMilis = Date.now(); //Incrementando
    }
}

waitUntil(5);
console.clear();
console.log('\n\n\n\n\n\n\t\t\tBOOOOOOOOMMMMMMM\n\n\n\n\n\n\n\n');






