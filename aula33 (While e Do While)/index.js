// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++; //sempre atualizar a variável para não entrar em um loop infinito
// }

console.log('\nSegue a vida...\n');

function random (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random (min, max);


while (rand !== 10){
    rand = random(min, max);
    console.log(rand);
}