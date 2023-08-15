//Tipo number

// let num1 = 10;
// let num2 = 2.543567865424570;

// console.log(num1.toString(2)); //converte o valor para binário
// console.log(num2.toFixed(2));//define o número de casas decimais que serão exibidas
// console.log(Number.isInteger(num1));//retorna se o valor do número é inteiro ou não
// console.log(Number.isInteger(num2));

// let temp = num1 * 'Olá';
// console.log(Number.isNaN(temp))//retorna se a conta é válida ou não.

//IEEE 754-2008
let num3 = 0.7;
let num4 = 0.1;

num3 += num4;//0.8
num3 += num4;//0.9
num3 += num4;//1

// console.log(num3);
// console.log(num3.toFixed(2));//corrige o valor, porém continua como false int
// console.log(Number.isInteger(num3));
num3 = parseFloat(num3.toFixed(2));//corrige o valor e altera para int, pode usar parseFloat ou Number
console.log(Number.isInteger(num3));
console.log(num3);
// console.log(num3 + num4);//imprecisão

//OUTRA FORMA DE RESOLVER SERIA NÃO UTILIZAR NÚMEROS DECIMAIS, SOMENTE MULTIPLICÁ-LOS POR 100.