function checkPalindrome(inputString) {
    var result = false;
    var pos = 0;
    var long = inputString.length;
      while (pos < long) {
        console.log(inputString[pos]);
        if (inputString[pos] == "a" || inputString[pos] == "b") {
          result = true;
            var esPar;
            var esImpar;
              if (long % 2 == 0) {
                esPar = true;
                console.log("la palabra es par");
              } else {
                esImpar = true;
                console.log("la palabra es impar");
              }
        } else {
          result = false;
          console.log(result + " ha salido porque continene otra letra");
          return;
        }
      pos++;
    }
    console.log(result + " ha ejecutado la fx completa");
    return console.log("El largo es " + long);
}
checkPalindrome("aabb");

function comparaPares(a,b) {
  var result_a_b;
  if (a == b) {
    result = true;
  } return result_a_b;
}
//Función que comprueba si una cadena de texto es capicúa
function capicua(cadena) {
  var resultX = false;
  var stop = cadena.length/2;
  var pos = 0;
  var largo = cadena.length-1;
  while (pos <= stop) {
    if (cadena[pos] == cadena[largo]) {
      resultX = true;
      pos++;
      largo--;
    } else {
      console.log("la cadena no es capicúa");
      resultX = false;
      return resultX;
    }
  } console.log("la cadena " + cadena + " es capicúa");
    return resultX;
}
capicua("abcdefghihgfedcba");

// function largoString(texto) {
//   var longitud = (texto.length)/2;
//   return longitud;
// }
// largoString("aabbaa");
