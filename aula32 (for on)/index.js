//for clássico -> Geralmente com iteráveis (array ou strings)
//for in -> Retorna o índice ou chave (strings, array ou objetos)
//for of --> Retorna o valor em si (iteráveis - array ou strings)
const nome = ['Fulano', 'Ciclano', 'Beltrano'];

for (let i = 0; i < nome.length; i++){
    console.log(i, '-->', nome[i]);
}

console.log('\n');

for (let indice in nome){
    console.log(indice, '-->',nome[indice]);
}

console.log('\n');

for (let valor of nome){
    console.log(valor);
}