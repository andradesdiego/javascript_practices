function indentedRectangle(spcs) {
    var rectangulo = 
        saltarCarro(spcs) +
        "\n" + 
        "\n" + 
        "\n" + 
        "\n" + 
        indentar(spcs) + "     **********\n" +
        indentar(spcs) + "     *        *\n" +
        indentar(spcs) + "     *        *\n" +
        indentar(spcs) + "     *    1   *\n" +
        indentar(spcs) + "     *        *\n" +
        indentar(spcs) + "     *        *\n" +
        indentar(spcs) + "     *        *\n" +
        indentar(spcs) + "     **********\n" ;
    return rectangulo;
}
function indentedRectangle2(spcs) {
    var rectangulo2 = 
        saltarCarro(spcs) +
        "\n" + 
        "\n" + 
        "\n" + 
        "\n" + 
        indentar(spcs) + "     **********\n" +
        indentar(spcs) + "     *        *\n" +
        indentar(spcs) + "     *        *\n" +
        indentar(spcs) + "     *    2   *\n" +
        indentar(spcs) + "     *        *\n" +
        indentar(spcs) + "     *        *\n" +
        indentar(spcs) + "     *        *\n" +
        indentar(spcs) + "     **********\n" ;
    return rectangulo2;
}

function indentar(espacios) {
    let spaces = "";
    for (i=0; i<espacios; i++) {
        spaces += " ";
    } return spaces;
}
function saltarCarro(saltos) {
    let numSaltos = "";
    for (i=0; i<saltos; i++) {
        numSaltos += "\n"
    } return numSaltos;
}

function moverRect(spc) {
    for (i=0; i<spc; i++) {
        let rectangle = indentedRectangle(i);
        let rectangle2 = indentedRectangle2(i);
        console.log(rectangle);
        console.log(rectangle2);
        waitUntil(0.20);
        console.clear();
    } 
}


function waitUntil(waitInSeconds) {
    var ahoraMilis = Date.now();
    //5 segundos en el futuro
    var tiempoLimite = ahoraMilis + (waitInSeconds * 1000);
    while (ahoraMilis<tiempoLimite) {
        var falta = tiempoLimite - ahoraMilis;
        if (falta % 100 == 0) {
        }
        ahoraMilis = Date.now(); //Incrementando
    }
}
moverRect(40);

