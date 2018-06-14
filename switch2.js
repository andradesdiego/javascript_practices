

var dayNumber = 4;
var day;
switch (dayNumber) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
        break;
    default:
        day = "No hay día seleccionado";
        break;
}
console.log("El día de la semana es: " + day);

function diaLaboral(dia) {
    switch (dia) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
           hoyToca = "Trabajar";
            break;
        case 6:
        case 7:
            hoyToca = "Descansar";
            break;
        default:
            hoyToca = "Ni idea... Carpe Diem";
    } 
        return 'Hoy toca... ' + '¡' + hoyToca + '!';
}
console.log(diaLaboral(6));




