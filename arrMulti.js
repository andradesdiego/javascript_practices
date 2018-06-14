var arrMult = [
    ["Rubén", "Noelia", "Mary", "Javi", "Jorge"],
    ["José Antonio", "Fran", "Sergio", "José", "Fernando"],
    ["Juanma", "Diego", "Juan Antonio", "Jesús", "Alex"]
];

//console.log(arrMult[1][2]);


// for (i=0; i<arrMult.length; i++){
//     for(y=0; y<arrMult[i].length; y++){
//         console.log(arrMult[i][y]);
//     }
// }

// for (i=arrMult.length-1; i>=0; i--){
//     for(y=arrMult[i].length-1; y>=0; y--){
//         console.log(arrMult[i][y]);
//     } 
// }

arrMult.forEach(function(elemento){
    elemento.forEach(function(item){
        console.log(item.toUpperCase());
    })
})
