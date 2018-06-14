// function shapeArea(n) {
//     var cubos1 = 0;
//     var cubos2 = 0;
//     var suma1 = 1;
//     var suma2 = 0;
//     var sumaTotal = 0;
//     for (i=0; i <= n; i++) {
//         cubos1 = i + (i-1);
//         suma1 = suma1 + cubos1;
//     } 
//     for (y=n-1; y > 0; y--) {
//         cubos2 = y + (y-1);
//         suma2 = suma2 + cubos2;
//     }
//     sumaTotal = suma1 + suma2;
//     console.log(sumaTotal);  
//     return sumaTotal;
// }
// shapeArea(2);
// console.log('Estoy aqui');

var arr1 = [3, 5, 9, 7];
// function cortarArr(arr) {
//     var nuevoArray = [];
//     var pos = 0;
//     for (i = 0; i < arr.length; i++) {
//         nuevoArray = arr.splice(pos,i);
//         pos++;
//         console.log(nuevoArray);
//         console.log(arr);
        
//     } 
//     return nuevoArray;
// }
// cortarArr(arr1);

function hasSameIcrement(arr)
{
    var increment;
    for (let index = 0; index < arr.length - 1; index++) {
        if(increment === undefined)
            increment = arr[index + 1] - arr[index];
        else
        {
            if(increment != arr[index + 1] - arr[index])
                return false;
        }
    }
    return true;
}

console.log(hasSameIcrement(arr1));
// console.log(hasSameIcrement(a2));

function removePos(removeThis, arr)
{
    var filtered = [];
    for (let index = 0; index < arr.length; index++) {
        if(index != removeThis)
            filtered.push(arr[index]);
    }
    return filtered;
}

function canBeFiltered(arr)
{
    for (let index = 0; index < arr.length; index++) {
        var filtered = removePos(index, arr);
        if(hasSameIcrement(filtered))
            return true;
    }
    return false;
}

console.log(canBeFiltered(arr1));