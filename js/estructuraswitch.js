let dia = parseInt(prompt("Seleccione un numero: 1-Lunes 2-Martes 3-Miercoles 4-Jueves 5-Viernes 0-Sabado/Domingo"));

switch (dia) {
    case 1:
        alert("El dia es lunes");
        break;
    case 2:
        alert("El dia es martes");
        break;
    case 3:
        alert("El dia es Miercoles");
        break;
    case 4:
        alert("El dia es Jueves");
        break;
    case 5:
        alert("El dia es Viernes");
        break;
    case 0:
        alert("Es fin de semana!!!");
        break;
    default:
        alert("La opcion ingresada no es correcta!");
}
