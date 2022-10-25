const heros = [
    'Batman',
    'Superman',
    'Wonder Woman',
    'Aquaman'
];

console.warn('For tradicional')

// for (let i = 0; i < heros.length; i++) {
//     console.log(heros[i]);
// };


console.warn('For in');

for (let i in heros) {
    console.log(heros[i])
}

console.log('-----')

for (const i in heros) {
    if (Object.hasOwnProperty.call(heros, i)) {
        console.log(`${i} ${heros[i]}`);
    }
}

console.log('-----')

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}


console.warn('For of');

for (const hero of heros) {
    console.log(hero)
}