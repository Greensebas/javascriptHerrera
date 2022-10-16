// Si la key se nombra igual que el parámetro no hace falta instanciarlo, se pone el mismo nombre
function createPerson1( name, lastname ) {
    return { name, lastname };
};

// Para lograr lo anterior en las arrow functions omitiento la palabra return debemos encerrar las claves entre {} y a estas entre () 
const createPerson2 = ( name, lastname ) => ({ name, lastname }); 

const person = createPerson2( 'Sebas', 'Acevedo' );
console.log(person);
// Para tomar un solo argumento, renombrarlo y guardarlo en una nueva variable podemos hacer lo siguiente
const { lastname : newLastame } = createPerson2( 'Sebas', 'Acevedo' )
console.log(newLastame);



// En funciones tradicionales se pueden traer todos los argumentos por más que no se usen
function printArg1() {
    console.log(arguments);
};

// En funciones flecha no se crea el objeto arguments por lo tanto tira un error
// const printArg2 = () => { console.log(arguments)};
// printArg2(10, true, false, 'hola', 'Juan');




// Para lograrlo hay que utilizar el parámetro rest (que son los ... no es spread operator) para traer todo lo que se pase como argumento
// no puede venir otro parámetro luego del rest, pero sí puedo colocar uno antes.
// Cuando se utilizan los ... en los parámetros se llama rest y le dice a js "uneme todos los argumentos en una sola variable"
// Hay que tener cuidado de no poner los args con el rest dentro de {} porque lo estaríamos convirtiendo en spread
const printArg3 = (age, ...args) => { console.log( age,args )};
printArg3(10, true, false, 'hola', 'Juan');

// Tambiem puedo hacer una desestructuración armando un array con el return del spread
const printArg4 = (age, ...args) => { 
    return args;
};
const [married, live, sayHi, name] = printArg4(10, true, false, 'hola', 'Juan');
console.log({ married, live, sayHi, name });

// --- <> ---

const tony = {
    name: 'Tony Stark',
    codeName: 'Ironman',
    live: false,
    // age: 40,
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// De esta manera se muestran en consola los objeto en "key : value" ahorrando líneas de código
// En el parámetro age se iguala a null si no recibe la key correspondiente
const printProperties = ({ name, codename, live, age = null, suits }) => {
    console.log({name});
    console.log({codename});
    console.log({live});
    console.log({age});
    console.log({suits});
}

printProperties(tony);
