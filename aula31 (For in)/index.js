//for in -> lê os ídices ou chaves do objeto

const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
    
// }

for (let indice in frutas){
    console.log(indice, ' --> ', frutas[indice]);
}

const pessoa = {
    nome: 'Fulano',
    sobrenome: 'Ciclano',
    idade: 25
}

console.log('\n');

for (let chave in pessoa){
    console.log(chave, ' --> ', pessoa[chave]);
}