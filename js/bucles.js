document.write("1-");
document.write("<br>2-");
document.write("<br>3-");
document.write("<br>4-");
document.write("<br>5-");

let i = 0;
while(i <= 5){
    document.write("<br>Linea -" + i);
    i++; //i=i+1;
}

let x = 50;
do{
    document.write("<br>Numero: " + x);
    x++;
}while(x<=8)

for(let a = 30; a >= 0; a--){
    document.write("<br>Numeros creados con for: " + a)
}