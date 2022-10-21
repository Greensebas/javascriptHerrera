let a = 10, 
    b = 20, 
    c = 'Hola', 
    d = 'Spiderman',
    x = a + b;

const saludo = c + " " + d;

let z = 30;

c = "Hola de nuevo";


// console.log( 'a', a );
// console.warn( { b } );
// console.error( `%c ${c} ${d}`, 'color:blue; font-weight:bold' );

// console.table([a, b, c, d, x]);

var miNombre = 'Sebastian'; // Si se declara con "var" la variable se guarda en el objeto global "windows" y puede ser llamado
                            // desde otros archivos js que vengan por debajo de donde se ha declarado.
                            // Claramente esto no es una buena práctica ya que para eso existe el export