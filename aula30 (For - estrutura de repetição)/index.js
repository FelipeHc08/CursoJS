// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

//i => index
for (let i = 0; i <= 5; i++) { //laço para repetir os console.log acima
    console.log(`Linha ${i}`);
}

for (let i = 0; i <=10; i++) {//laço para exibir números ímpares e pares
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
}

const frutas = ['Uva', 'Pêra', 'Maçã', 'Banana', 'Kiwi', 'Abacaxi', 'Mamão', 'Caqui', 'Maracujá', 'Manga'];

for (let i = 0; i < frutas.length; i++){//laço de repetição para exibir o array e seus respectivos índices
    console.log(`Índice ${i}: `, frutas[i]);
}
