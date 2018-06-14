// function calculateAreaOfSquare(widthHeight) {
//     let square = widthHeight + widthHeight;
//     return square;
// }
// console.log(calculateAreaOfSquare(10));
// const square = function(x) {
//     return x*x;
// };
// console.log(square(12));

// const scope = function(start) 
// {
//     if (start != undefined) 
//     {
//         let counter = start;
//         let c = 0;
//         while (counter < 100) 
//         {
//             console.log(counter);
//             c += counter;
//             counter++;
//         }  
//         return c;
//     }
// }
// console.log(scope(45));

module.exports = function wait(segundos) {
        let vueltas = 0;
        let momentoActual = Date.now();
        let momentoFinal = momentoActual + (segundos * 1000)
        while (momentoActual<momentoFinal) {
            momentoActual = Date.now();
            vueltas++;
        } return;
    } 

// const measure = require("measure-duration");
// let duration = measure.measureCall(wait, 1.6);
