/*
Pra cada elemento:
Retorne apenas uma String com o nome da pessoa
Remova apenas a chave 'nome' do objeto
Adicione uma chave id em cada objeto
*/

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 32},
    {nome: 'José', idade: 40},
    {nome: 'Abacuque', idade: 55},
    {nome: 'Noé', idade: 165},
    {nome: 'Abraão', idade: 97},
];

const nomes = pessoas.map(obj => obj.nome);
const idade = pessoas.map(function(obj) {
    delete obj.nome;
    return obj;
});
const id = pessoas.map(function (obj, i){
    return {id : i + 1}
})

// console.log(nomes);
// console.log(idade);
// console.log(id);
console.log(pessoas);