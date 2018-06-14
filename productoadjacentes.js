inputArrayFull = [-23, 4, -3, 8, -12];

function adjacentElementsProduct(inputArray) {
  var product = inputArray[0]*inputArray[1];
  for (i=0; i < inputArray.length; i++) {
    var num1 = inputArray[i];
    var num2 = inputArray[i+1];
    if ((num1*num2) > product) {
        product = num1*num2;
    }
  }
    console.log('El producto mas alto es ' + product);
    return product;
}
adjacentElementsProduct(inputArrayFull);
