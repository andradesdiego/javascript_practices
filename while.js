function sumaImpares(numMax) { //esta fx siempre calcula el impar
    var suma = 0;
    var cont = 1;
    while (cont <= numMax ) {
        if (cont%2 != 0) {
            suma += cont;
        } 
        cont++;
    } 
    console.log('La suma de impares desde el 1 hasta el ' + numMax + ' es ' + suma);
    return suma;
}
sumaImpares(15);

function sumaImpares2(numMax) { //esta fx incrementa en 2 - no calcula impar
    let suma = 0;
    let cont = 1;
    while (cont <= numMax ) {
        suma += cont;
        cont += 2;
    } 
    console.log('La suma de impares desde el 1 hasta el ' + numMax + ' es ' + suma);
    return suma;
}
sumaImpares2(sumaImpares(8)); //Llamamos fx con otra fx como param

let sumaImparesES6 = (numMax) => { //la fx anterior en ES6
    let cont = 1;
    let suma = 0;
    while (cont <= numMax) {
        suma += cont;
        cont += 2;
    } 
    console.log(`La suma de impares desde el 1 hasta el ${numMax} es ${suma}`);
    return suma;
} 
sumaImparesES6(95);

function sumaPares(numMax) { //esta fx incrementa en 2 - no calcula impar
    let suma = 0;
    let cont = 2;
    while (cont <= numMax ) {
        suma += cont;
        cont += 2;
    } 
    console.log('La suma de pares desde el 1 hasta el ' + numMax + ' es ' + suma);
    return suma;
}
sumaPares(48); //Llamamos fx