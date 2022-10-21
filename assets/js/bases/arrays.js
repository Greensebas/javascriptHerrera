//? Esto crea un nuevo array con 10 elementos vacíos (no se usa pero existe)
// const arr = new Array(10);

let games = [ 'Mario', 'Megaman', 'Zelda'];
console.log({ games }); // Ponerlo dentro de {} lo hace "objeto literal"

console.log( games[0] );

let arrthings = [
    true,
    123,
    'sebas',
    1 + 2,
    function add(a , b) {a + b},
    ()=>{},
    { a: 1},
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
];

// console.log( arrthings )
 console.log( arrthings[7][4][1]);