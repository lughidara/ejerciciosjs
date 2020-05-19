let n1 = parseInt(prompt("Ingrese un número:"));
let n2 = parseInt(prompt("Ingrese un segundo número:"));

if(n1 == n2){
    alert("Los números son iguales!");
}
else if(n1 > n2){
    alert("El primer número ingresado (" + n1 + ") es mayor que el segundo número ingresado (" + n2 + ")." );
}
else{
    alert("El segundo número ingresado (" + n2 + ") es mayor que el primer número ingresado (" + n1 + ")." );
}