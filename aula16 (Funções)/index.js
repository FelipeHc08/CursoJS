const raiz = n => n ** 0.5;  //arrow function (forma mais moderna)

console.log(raiz(9));

// function soma(x = 1, y = 1){
//     const resultado = x+y;
//     return resultado;//OBS --> tudo que está dentro do escopo da função está protegido e não pode ser alterado por fora
// }//OBS--> return encerra a função 

// console.log(soma());
// console.log(soma(10, 10));

// function saudacao(nome){   //funcao nomeDaFuncao (parametro) 
//     return `Bom dia, ${nome}!`;
// }

// const variavel = saudacao('Felipe');
// console.log(variavel);//OBS --> por padrão, qualquer função criada em JS irá retornar o valor undefined caso não seja especificado o que você quer que seja retornado
// // saudacao('Laura');
// // saudacao('Célia');