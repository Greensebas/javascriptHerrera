let a = 10, 
    b = 20, 
    c = 'Hola', 
    d = 'Spiderman',
    x = a + b;

const saludo = c + " " + d;

let z = 30;

console.log( 'a', a );
console.warn( { b } );
console.error( `%c ${c} ${d}`, 'color:blue; font-weight:bold' );

c = "Hola de nuevo";

console.table([a, b, c, d, x]);