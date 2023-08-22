const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [primeiroNumero, segundoNumero, ...resto] = numeros;//atribuição via desestruturação
const [ , , , quartoNumero, , sextoNumero] = numeros;//valores vazios pulam

console.log(quartoNumero, sextoNumero);
// console.log(resto);//operador rest/spread


//                     0          1          2
//                  0  1  2    0  1  2    0  1  2
const numeros2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
// const [, [, , seis]] = numeros2;//complexidade em excesso
const [lista1, lista2, lista3] = numeros2;

console.log(numeros2[1][2]);//-> retorna o 6

console.log(lista3[2]);//-> retorna o 9 
