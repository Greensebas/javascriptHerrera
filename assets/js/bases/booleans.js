const returnTrue = () => {
    console.log('Regresa true');
    return true;
};


const returnFalse = () => {
    console.log('Regresa false');
    return false;
};

// console.warn('Not');
// console.log(true); // true
// console.log(!true); // false
// console.log(!!true); // por cada ! da vuelta el booleano por eso el resultado acá es true
// console.log(!false); // true

// console.log( !returnFalse() ); // true

// console.warn('And');
// console.log( true && true ); // true
// console.log( true && false ); // false


// console.warn('Or');
// console.log( true || false); // true
// console.log( false || false); // false


// // De esta manera se puede utilizar como condicional a la hora de ejecutar funciones
// console.warn('====');
// console.log( returnFalse() && returnTrue() ); // al registrar el primer false corta la lectura de la siguiente evaluación
// console.log( returnTrue() && returnFalse() ); // al registrar true en la primera evaluación continúa con la siguiente

// console.log( returnFalse() || returnTrue() ); // al registrar el primer false sigue con la lectura de la siguiente evaluación
// console.log( returnTrue() || returnFalse() ); // al registrar true en la primera evaluación corta la siguiente


console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hello World';
const a2 = true && 'Hello World' && soyFalse && true;
const a3 =soyFalse || 'Hello World';
const a4 = soyFalse || soyUndefined || soyNull || 'Hello World';
const a5 = soyFalse || soyUndefined || returnTrue() || 'Hello World'

console.log({ a1, a2, a3, a4, a5 }); 


