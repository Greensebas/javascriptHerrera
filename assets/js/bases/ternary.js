const day = 1;
const hour = 10;

let openHour;
let msg;

// if (day === 0 || day === 6) {
// if ( [0, 6].includes(day)) {        // Esta línea suplanta a la anterior
//     console.log('Fin de semana');
//     openHour = 9;
// } else {
//     console.log('Día de semana');
//     openHour = 11;
// }

openHour = ( [0, 6].includes(day) ) ? 9 : 11;    // Con este ternario ahorramos todas las líneas anteriores


// if ( hour >= openHour ) {
//     msg = 'Abierto';
// } else {
//     msg = `Cerrado. Horario de apertura ${openHour}`
// }

msg = ( hour >= openHour ) ? 'Abierto' : `Cerrado. Horario de apertura ${openHour}`;

console.log({ openHour, msg });
