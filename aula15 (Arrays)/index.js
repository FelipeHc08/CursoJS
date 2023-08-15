// const alunos = ['Luiz', 'Claudia', 1, true, null ]; //funciona, mas não é uma boa prática de programação
//String indexadas por letra, Arrays por elemento

//                0        1        2
const alunos = ['Luiz', 'Maria', 'João', 'José']; //OBS: os parâmetros do objeto const podem ser alterados, já o identificador da variável, não.

console.log(typeof(alunos));//OBS --> Array em JS pe objeto.
console.log(alunos instanceof Array); //-->se retornar true, é um Arrayddd
// console.log(alunos.slice(0 , 3)); //exibe os índices 0, 1 e 2
// console.log(alunos.slice(0 , -2)); //exibe o array menos os 2 últimos índices

// OBS: acessar um valoe que não existe retonará undefined
// delete alunos [1];//deleta o índice informado do array, ficando um espaço vazio (undefined)
console.log(alunos);

// alunos.pop();//remove o ÚLTIMO elemento do array
// alunos.shift(); //remove o PRIMEIRO elemento do array

//adiciona elementos no INÍCIO do array
// alunos.unshift('Carlos');

//adiciona elementos no FINAL do array

// alunos.push('Otávio')  
// alunos[alunos.length] = 'José';
// alunos[alunos.length] = 'Gabriel';

// alunos [0] = 'Eduardo'//substitui um elemento.
// alunos [3] = 'Clara'//adiciona um elemento.

