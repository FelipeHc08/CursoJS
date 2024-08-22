// Criando um Array de 10 posições com números aleatórios 
const numeros = new Array(10).fill(0).map(() => Math.floor(Math.random() * 50));

// Formatando esse array
console.log(numeros.map(num => num.toFixed(0)));

// Utilizando a função filter para retornar apenas os valores maiores que 10 em outro array
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Ana', idade: 45 },
    { nome: 'Carlos', idade: 30 },
    { nome: 'Beatriz', idade: 27 },
    { nome: 'João', idade: 50 },
    { nome: 'Mariana', idade: 35 },
    { nome: 'Pedro', idade: 40 },
    { nome: 'Fernanda', idade: 29 },
    { nome: 'Ricardo', idade: 55 },
    { nome: 'Sofia', idade: 22 }
];

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisDeCinquenta = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
console.log("Pessoas com nome grande:")
console.log(pessoasNomeGrande);
console.log("Pessoas com mais de 50 anos:")
console.log(pessoasComMaisDeCinquenta);
console.log("Pessoas que o nome termina com 'a':")
console.log(nomeTerminaComA);
