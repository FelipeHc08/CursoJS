/*
    OPERADORES DE COMPARAÇÃO
    > maior que
    >= maior que ou igual a
    < menor que
    <= menor que ou igual a
    == igualdade (valor) **não é recomendado a utilização
    === igualdade estrita (valor e tipo)
    != diferente (valor) **não é recomendado a utilização
    !== diferente estrito (valor e tipo)
*/

const num1 = 10;//Number
const num2 = '10';//String
const comp = num1 == num2;
console.log(comp);//retorna true, mesmo com tipos diferentes. Por isso utilizar ===.