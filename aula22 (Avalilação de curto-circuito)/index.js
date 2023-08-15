/*
&& -> false && true = "O valor mesmo" retorna false
|| -> true || false = "O valor mesmo" retorna true

FALSY

*false (LITERAL)
0
'' "" `` (String vazia)
null / undefined
NaN

*/

console.log('José Carlos' && 0 && 'Maria Antonieta'); //Retronara 0, pois é o valor falso
console.log('José Carlos' && true && 'Maria Antonieta'); //Retronara "Maria Abtibueta", pois é o último valor verdadeiro

