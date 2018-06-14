let arrD = [9,7,5,8,3,4,3,2,1];

//funcion que recibe un array
//crear array vacío donde guardar resultado
//comparar el primero con el segundo
//el mayor lo push al array nuevo
//sigo hasta el final
function compare(num1,num2){
    if(num1<num2){
        return num1;
    } else {
        return num2;
    } 
}
console.log(compare(48,7));


function recorreArr(arr){
    let arrCompleto = [];
    let temp = 0;
    for(i=0;i<arr.length;i++){
        temp = compare(arr[i], temp);
        if(arr[i] < temp){
        arrCompleto.push(arr[i]);
        }
    } 
    return arrCompleto;
}
console.log(recorreArr(arrD));


// function metodoBurbuja(toSort){
//     let z = 0;
//     let temp;
//     let max = toSort.length;
//     while(z < max){
//         for(let x = 0; x < max; x++){
//             if(toSort[x] > toSort[x+1]){
//                 temp = toSort[x];
//                 toSort[x] = toSort[x+1];
//                 toSort[x+1] = temp;
//             }
//         }
//         z++;
//         max--; //Acortamos el recorrido del array por que los ultimos valores son los maximos ya ordenados.
//     }
//     return toSort;
//  }