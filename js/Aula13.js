/*var x;
x = 4;

x = "Javascript";

alert(x); */


function potencia (x,y) {
    var potencia = 1;
    for(var i = 1; i < y; i++) {
        potencia = potencia * x;
    }
    return potencia;
}