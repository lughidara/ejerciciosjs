let n1 = parseInt(prompt("Ingrese un número:"));
let n2 = parseInt(prompt("Ingrese un segundo número:"));
let n3 = parseInt(prompt("Ingrese un tercer número:"));

/*if(n1 == n2 || n2 == n3 || n1 == n3){
    alert("Existen números iguales!");
}
else if(n1 > n2 > n3 || n1 > n3 > n2){
    alert("El primer numero es el mayor: " + n1);
}
else if(n2 > n1 > n3 || n2 > n3 > n1){
    alert("El segundo numero es el mayor: " + n2);
}
else{
    alert("El tercer numero es el mayor: " + n3);
}*/

if(n1 == n2 && n1 == n3){
    alert("Los tres numeros son iguales!");
}
else if(((n1 == n2) && (n1 > n3)) || ((n1 == n3) && (n1 > n2)) || (n1 > n2 && n1 > n3)){
    alert("El numero mayor es: " + n1);
}
else if((n2 == n3 && n2 > n1) || (n2 > n1 && n2 > n3)){
    alert("El numero mayor es: " + n2);
}
else{
    alert("El numero mayor es: " + n3);
}
