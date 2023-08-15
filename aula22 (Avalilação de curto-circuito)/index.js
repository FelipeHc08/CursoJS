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

console.log(0 || false || null || 'Luiz Otavio' || true) //Retornará 'Luiz Otavio' pois é o primeiro valor verdadeiro

//EXEMPLO PRÁTICO:

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(corPadrao);//Retornara 'Preto' como cor padrão, já que é o unico valor true. Evita a utilização de um grande laço de repetição if else

//"PEGADINHA"

const a = 0;
const b = null;
const c = 'false';//String -> true
const d = false;
const e = NaN;

console.log(a || b || c || d || e); //retorna a String 'false' que possui valor true

//OBS: Se todas forem falsas, a última falsa será retornada

