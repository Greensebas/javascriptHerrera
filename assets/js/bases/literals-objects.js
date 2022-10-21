let character = {
    name: 'Tony Stark',
    codeName: 'Ironman',
    live: false,
    age: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],
    location: {
        zip: '10880, 90205',
        ubication: 'Malibu, California'
    },
    'last-movie': 'Infinity war' // Cuando es necesario usar un simbolo que sea operador como en este aca el - la key se pone entre comillas
};


console.log(character);

console.log(character.name);
console.log(character['name']);

console.log(character.coords.lat);

console.log('No suits: ', character.suits.length);
console.log('Last suit: ', character.suits[character.suits.length - 1]);

const x = 'live';

console.log('Live: ', character[x]);

console.log('Last movie: ', character["last-movie"]); // Cuando sea necesario llamar a esa key no se va a usar el . sino los []

// Para cambiar el valor de una key
character.age = null;
console.log(character.age);

// Para eliminar una key
delete character.age;
console.log(character);

// Agregar una key
character.married = true;

// Para poder manipular el literal object como array.
const entriesPares = Object.entries( character );
console.log(entriesPares);

// Para impedir la modificación del objeto. 
// Solo congela las claver primarias, si esa clave contiene otro objeto permite modificarlo
// Para congelar ese objeto anidado se debe especificar entre los ()
Object.freeze( character );
character.money = 99999999999;
character.married = false;
character.location.ubication = 'Costa Rica'
console.log(character);

// Obtener las keys en formato arreglo y tambien los values
const keys = Object.getOwnPropertyNames( character );
const values = Object.values( character )
console.log(keys, values);

