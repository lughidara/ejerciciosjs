let frase = prompt("Ingrese una frase");
let cantidad = frase.length;
document.write("Cantidad de caracteres: " + cantidad);

for(i=0 ; i<cantidad ; i++)
{
    letra = frase.substr(i,1);
    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        document.write("<br>" + letra);
    }
}