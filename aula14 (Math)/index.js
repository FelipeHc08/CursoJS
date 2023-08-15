// let num1 = 9.5792345;
// let num2 = Math.floor(num1); //arredonda pra baixo.
// let num2 = Math.ceil(num1); //arredonda pra cima.
// let num2 = Math.round(num1); //arredonda para o valor mais próximo.
// console.log(num2);
// console.log(Math.max(1,2,3,4,5,-20,20,34,7));//exibe o maior valor informado
// console.log(Math.min(1,2,3,4,5,-20,20,34,7));//exibe o menor valor informado
// console.log(Math.random());//exibe um número aleatório entre 0 e 1, sendo o 1 não incluído

// const aleatorio = parseFloat(Math.random() * (10-5) +5).toFixed(2);//gera número aleatório entre 10 e 5 com duas casas decimais
// const aleatorio = Math.round(Math.random() * (10-5) +5);//gera número aleatório inteiro entre 10 e 5

console.log(Math.PI);//imprime o valor de PI
console.log(Math.pow(2,10));//realiza potenciação --> mesma coisa de imprimir 2 ** 10
//raiz quadrada --> N ** (1/2) ou 0.5
console.log(parseFloat(156 ** (0.5)).toFixed(2));//imprime a raiz de um número com 2 casas decimais após a vírgula

console.log(100 / 0);//Não gera erro, e sim um dado do tipo Infinity, e a conta retorna como verdadeiro. Quanto mais próximo de zero for o divisor maior o resultado, até chegar em um valor infinito.
