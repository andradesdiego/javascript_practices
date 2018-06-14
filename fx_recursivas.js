function printUntil(number, max) {
    if (number <= max) {
        console.log(number);
        printUntil(number + 1, max)
        //printUntil(++number, max);
    } else
    return;
}
//printUntil(3,18000);
//Mi solución (usando un "while"):
// function exp (n,x){
//     let result = n;
//     let xveces = 1;
//     while (xveces < x)  {
//         exp(n, x - 1);
//         result = n*result;
//         xveces++;
//     } return result;
// }
//La solución elegante (resuelve exp0=1 y exp1=n)
function exp(n,x){
    if(x == 0){
        return 1;
    } else if (x == 1){
        return n;
    }
    return n * exp(n, x-1);
}
//console.log(exp(2,10));

function sumNtoM(n,m) {
    if(n == m)
        return m;
    else
        return n + sumNtoM(n + 1, m);
}
//console.log(sumNtoM(1,10));

var sumNMes6=(n,m) => {if(n == m){ return m} else {return n + sumNMes6(n+1,m);}};
//console.log(sumNMes6(1,10));
const lista = ["This","should","become","a","string"];

function creaString(from, words) {
    if(from == words.length) {
        return "";
    } else
        return words[from] + " " + creaString(from + 1, words);
}
console.log(creaString(0, lista));
