var obj = {
    "nombre": "Pedro", 
    "nac": 1976, 
    "edad":41
}

//1 definir el objeto
//2 obnener las claves del objeto y las guardo en una variable
//3 itero sobre las claves con for o foreach
//4 imprimo las claves
//5 imprimo los valores

var claves = Object.keys(obj);
claves.forEach(function(key) {
    console.log("Clave ", key)
    console.log("Valor ", obj[key]);
});

