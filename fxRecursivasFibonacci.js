//0,1,1,2,3,5,8,13,21,34,55,89
//Cada número es la suma de los dos anteriores(excluido 0,1)

function fib(n) {
    if (n < 2) {
        return n;
    } else {
        return fib(n-2) + fib(n-1);
    }
}
console.log(fib(9));
