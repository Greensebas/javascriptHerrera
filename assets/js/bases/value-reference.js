let a = 10;
let b = a;
a = 30;

console.log( a, b );

//! Variables por referencia
let juan = { name: 'Juan' };
let ana = juan;
ana.name = 'Ana';
// Al apuntar al mismo lugar en memoria cambiando ana tambien cambiamos juan
console.log({ juan, ana }); // clg Ana, Ana

// Para que no suceda esto utilizamos el spread operator (...)

let pedro = { name: 'Pedro' };
let maria = { ...pedro };
maria.name = 'María';

console.log( pedro, maria );

//! En el caso de pasar el nombre por funcion sucede lo mismo
const changeName1 = ( person ) => {
    person.name = 'Tony';
    return person;
};

let peter = { name: 'Peter' };
let tony = changeName1(peter);

console.log({ peter, tony });

// Para resolver este problema utilizamos el spread en el parámetro cologando las {} y los ...
// El spread operator rompe con la referencia
const changeName2 = ({ ...person }) => {
    person.name = 'Sebas';
    return person;
};

let javier = { name: 'Javier' };
let sebas = changeName2(peter);

console.log({ javier, sebas });


const fruits = ['manzana', 'banana', 'pera'];
// Esto modifica todo porque no rompe la referencia
const otherFruits1 = fruits;

// Estas son dos formas de romper la referencia, con el spread operator y con un .slice() sin pasar ningún parámetro
console.time('slice');
const otherFruits3 = fruits.slice();
console.timeEnd('slice');

console.time('spread');
const otherFruits2 = [...fruits];
console.timeEnd('spread');


otherFruits3.push('mango');

console.table({ fruits, otherFruits3 });


