const pessoa = {
    nome: 'Marcos',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

        //nome alterado                 ocupação não existe, então recebe '' ao invés de undefined
const { nome: teste, sobrenome, idade , ocupação = ''} = pessoa;//atribuição via desestruturação
const { endereco: {rua: r} } = pessoa;//endereco recebe o valor de rua e rua será a variável r

console.log(teste, sobrenome, idade, ocupação);
console.log(r);