function reverse(arr) {
    let nuevoArr = [];
    for (i=arr.length-1; i>=0; i--) {
         nuevoArr.push(arr[i]);
    }
    console.log("el array invertido es " + nuevoArr);  
    return nuevoArr;
 }
let arrayNums = [1, 3, 5, 7, 9];
reverse(arrayNums);

let a1 = [1, 3, 5, 7, 9];
let a2 = [8, 7, 5, 3, 1];
function compruebaInvertidos(arr1, arr2) {
    //Si los arrays son de distinto tamaño, salimos de la fx.
    if (arr1.length != arr2.length) {
        return false;
    }
    //Si son iguales, empezamos las comparaciones de los valores.
    for (i=0; i<arr1.length; i++) {
        //Guardamos la posición de partida del segundo array (la última)
        let ultimaArr2 = arr2.length-1;
        //Aquí decremento la posición del segundo array con el valor i
        if (arr1[i] == arr2[ultimaArr2-i]) {
            console.log('la comprobación de las posiciones ' + i + " - " + (ultimaArr2-i) + " es correcta");   
        //Si alguno falla, pintamos y salimos
        } else {
        console.log("LOS ARRAYS NO SON INVERTIDOS!!!! Alguno de los valores comparados no es igual");
        return false;
        }
    } 
    //Si todo ok, pinto solución y devuelvo ok
    console.log('Los arrays son inversos');
    return true;
}
compruebaInvertidos(a1, a2);