

let arr2D = [["0","1","2","3","4","5","6","7","8","9",],
             ["1"," "," "," "," "," "," "," "," "," ",],
             ["2"," "," "," "," "," "," "," "," "," ",],
             ["3"," "," ","h","e","l","l","o"," "," ",],
             ["4"," "," "," "," "," "," "," "," "," ",],
             ["5"," "," "," "," "," "," "," "," "," ",],            
             ["6"," "," "," "," "," "," "," "," "," ",],
             ["7"," "," "," "," "," "," "," "," "," ",],
             ["8"," "," "," "," "," "," "," "," "," ",],
             ["9"," "," "," "," "," "," "," "," "," ",]
            ];

//console.log(arr2D[3][3] + arr2D[3][4] + arr2D[3][5] + arr2D[3][6] + arr2D[3][7]);

function pintaArray2d(arr) {
    for (ix=0;ix<arr2D.length;ix++) {
        let stringFila = ""; 
        for (iy=0;iy<arr2D[ix].length;iy++) {
            let caracter = arr2D[ix][iy];
            stringFila += caracter;
        } 
        console.log(stringFila);
    }
}
pintaArray2d(arr2D);