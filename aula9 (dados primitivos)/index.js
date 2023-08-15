//TIPOS DE DADOS PRIMITIVOS

// String, number, undefined, null, boolean, symbol

const nome2 = "FELILPE";//String
const nome  = 'FELILPE';//String
const nome1 = `FELILPE`;//String
const num = 10;//number
const num1 = 10.121321;//number
let nomeAluno;//undefined = não aponta para local nenhum na memória - OBS: não se inicia undefined como const
const sobrenomeAluno = null;//nulo = não apoonta para local nenhum na memória
const aprovado = true; //ou false - boolean (lógico)

console.log(typeof sobrenomeAluno, sobrenomeAluno); // BUG - null não é considerado objeto.

const numero = 1;
const numero1 = Number('5.2');


//parseInt (INT), parseFloat (FLOAT), Number (sem distinção) 
console.log(numero1 + numero);


/**
 * OPERADORES
 *
 * Aritiméticos: 
 * 
 * adição e concatenação (+)
 * subtração (-) 
 * multiplicação (*) 
 * divisão (/)
 * potenciação (**)
 * resto da duivisão (%)
 * ORDEM DE EXECUÇÃO --> ()  **  *  /  %  +  -
 * incremento (++)
 * decremento(--)
 * 
 * Atribuição:
 * +=
 * -=
 * *=
 * /=
 * **=
 * %=
 * 
 * OBS - NaN -> Not A Number
 * 
 */