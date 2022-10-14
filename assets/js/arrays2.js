let games = ['Zelda', 'Mario', 'Megaman', 'Mortal kombat']
console.log('large:', games.length);

let first = games[0];
let last = games[games.length-1];

console.log({ first, last });

games.forEach( (e, index, arr) => {
    console.log( e, index, arr );
});

let newLength = games.push('Jim');
console.log({ newLength, games });

newLength = games.unshift('Mario Kart');
console.log({ newLength, games });

let deletedGame = games.pop();
console.log(deletedGame);

console.log(games);

let pos = 1;
let deletedGames = games.splice( pos, 2 );
console.log({ deletedGames, games })


let megamanIndex = games.indexOf('Megaman');
console.log({ megamanIndex });



