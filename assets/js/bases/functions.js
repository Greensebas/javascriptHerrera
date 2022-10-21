// Función común
function sayHi1(name) { // Cuando se indican en la creación de la función son 'parámetros'
    console.log(arguments); // Esto solo puede hacerse en funciones declaradas de esta manera. Recibe todos los argumentos
    console.log('Hello ' + name);
};

// sayHi1('Sebas', 35, false, 'Argentina'); // Cuando se pasan en el llamado de la función son 'argumentos'

// Función anónima asignada a una variable
const sayHi2 = function(name) {
    console.log(`Hello ${name}`)
};

// sayHi2('Sebastian');

// Arrow function
const sayHi3 = (name) => {
    console.log(`Hola ${name}`);
}

// sayHi3('Acevedo');

//! Al no tener el return definido por nosotros con la palabra reservada, el return implícito dara 'undefined'

console.log(sayHi1('Sebas'));
console.log(sayHi2('Sebas'));
console.log(sayHi3('Sebas'));

// En el caso de las funciones flecha, si tienen un solo procedimiento podemos omitir el return y las llaves
const add = ( a, b ) =>  a + b; 
// console.log(add(1, 2));


function getRandom() {
    return Math.random();
};
//console.log(getRandom());

const random = () => Math.random();
console.log(random());