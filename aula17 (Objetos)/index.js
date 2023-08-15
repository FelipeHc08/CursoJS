// const pessoa1 = {//objeto pessoa1
//     //Atributos
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };


// //Acessar os atributos do objeto
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);


//FUNÇÃO CRIADA PARA CRIAR O OBJETO
// function criaPessoa(nome, sobrenome, idade){
//     return{//FACTORY
//         nome,
//         sobrenome,
//         idade
//     };
// }

// const pessoa1 = criaPessoa ('Luiz', 'Miranda', 25);
// const pessoa2 = criaPessoa ('Felipe', 'Cesar', 20);
// const pessoa3 = criaPessoa ('Otavio', 'Neto', 56);

// console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);


const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} diz: minha idade atual é: ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade(); 

pessoa1.fala();
pessoa1.incrementaIdade(); 

pessoa1.fala();
pessoa1.incrementaIdade(); 