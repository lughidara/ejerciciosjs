let numero1 = prompt("Ingrese un numero");
console.log(numero1);

let numero2 = prompt("Ingrese un segundo numero");
console.log(numero2);


/*if( parseInt(numero1) > parseInt(numero2) )
{
    document.write("El numero1 es mayor al numero2");
}
else if( parseInt(numero1) == parseInt(numero2) )
{    
document.write("Los numeros son iguales");
}
else{
    document.write("El n2 es mayor que el n1");
}*/

//otra forma
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

if (numero1 == numero2)
{
    document.write("Los numeros son iguales");
}
else{
    if(numero1 > numero2)
    {document.write("n1 mayor a n2")}
    else{
        document.write("n2 mayor a n1")
    }
}