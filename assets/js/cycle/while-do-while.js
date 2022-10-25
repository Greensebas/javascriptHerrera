const autos = ['ford', 'mazda', 'honda', 'toyota'];

let i = 0;

//! WHILE   
// while (i < autos.length) {
//     console.log(autos[i]);
//     i++;    
// };


//? La condición tiene que ser verdadera, si es falsy (undefined, null o false) ya deja de cumplirse. En el siguiente caso cuando 
//? el indice es 4 la condición es undefined y por eso corta el ciclo.

// while (autos[i]) {
//     console.log(autos[i]);
//     i++;    
// };

//! BREAK
// while (autos[i]) {
//     if(i === 1){
//         break
//     }
//     console.log(autos[i]);
//     i++;    
// };

//! CONTINUE
// while (autos[i]) {
//     if(i === 1){
//         i++;
//         continue;
//     }
//     console.log(autos[i]);
//     i++;    
// };

j = 0

//! DO WHILE
do {
    console.log(autos[j]) ;
    j++
} while (autos[j]);