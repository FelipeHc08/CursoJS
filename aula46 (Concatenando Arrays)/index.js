const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3String = a1 + a2;  // Dessa maneira, será retornado uma String, e não um Array 
const a3 = a1.concat(a2);

/* ... rest -> pega o resto do Array 
neste caso, ... -> spread
*/

const a3Spread = [... a1, ... a2, ... [7, 8, 9]];  // Concatenado da mesma maneira 
console.log(a3Spread);

console.log(typeof a3String, a3String); 
console.log(typeof a3, a3); 