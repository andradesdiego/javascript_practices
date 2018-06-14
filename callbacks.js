function callback()
{
    console.log("callback called");
}
setTimeout(callback, 3000);


setTimeout(function(){
    console.log("2 segundos");
}, 2000);


setTimeout(()=>{
    console.log("Despues de 1 segundo");
}, 1000);

console.log("setTimeout llamado 3 veces...");

//Función flecha
const myArrow = (msg)=>
{
    console.log(msg);    
};

myArrow("Hello");