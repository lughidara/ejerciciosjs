let numero = parseInt(prompt("Ingresa un numero:"));
if (numero % 2 == 0 || numero % 5 == 0 || numero % 3 == 0 || numero % 7 == 0) {
    if (numero % 2 == 0) {
        document.write("El numero es divisible por 2<br>");
    }
    if (numero % 5 == 0) {
        document.write("El numero es divisible por 5<br>");
    }
    if (numero % 3 == 0) {
        document.write("El numero es divisible por 3<br>");
    }
    if (numero % 7 == 0) {
        document.write("El numero es divisible por 7<br>");
    }
}
else {
    alert("El numero no es divisible por 2, 3, 5 o 7 :(");
}