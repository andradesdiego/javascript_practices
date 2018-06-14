let pesos= [450, 20, 30, 10, 340, 476, 120, 180, 475];

// function sumaPesos(mercancia) {
//     let suma = 0;
//     for (i = 0; i < mercancia.length; i++) {  
//         suma += pesos[i];
//     } 
//     console.log("La suma de la mercancia es " + suma);
//     return suma;
// }
// function cuantosViajes(kilosTotales) {
//     let maxKilos = 550;
//     let viajes = kilosTotales / maxKilos;
//     viajes = Math.ceil(viajes);
//     console.log("El número de viajes es " + viajes);
//     return viajes;
// }
// cuantosViajes(sumaPesos(pesos));

function cuantasCajas(cajas) {
    let pesoMax = 550;
    let numCajas = 0;
    let pesoTotal = 0;
    for (i=0; i<cajas.length; i++) {
        pesoTotal = pesoTotal + cajas[i];
        if (pesoTotal > pesoMax) {
            break;
        }
        numCajas++;
    } 
    console.log("El numero de cajas es " + numCajas);
    return numCajas;
}
cuantasCajas(pesos);