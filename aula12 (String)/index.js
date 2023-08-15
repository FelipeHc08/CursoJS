//               01234567
let umaString = "Um Texto"

console.log(umaString.charAt(6)) //-> retorna o elemento na posição 6

//concatenação
console.log(umaString.concat(' em um lindo dia'));
console.log(umaString + ' em um lindo dia');
console.log(`${umaString} em um lindo dia`);

console.log(umaString.indexOf('Texto'));//saber em qual índice se inicia a String
console.log(umaString.indexOf('Um'));
console.log(umaString.lastIndexOf('m', 3));//busca de trás para frente, a partir do índice 
console.log(umaString.replace(/Texto/, 'Livro'));

let outraString = 'O rato roeu a roupa do rei de roma.'

console.log(outraString.replace(/r/g, '#'))//substitui todos os R
console.log(outraString.length); //saber o comprimento da String
console.log(outraString.slice(2,6))//divide a String onde quiser
console.log(outraString.slice(-3))//divide a String do final para trás
console.log(outraString.slice(32))//divide a String a partir do ponto definido

console.log(outraString.split(' ', 2));//separa a String pelo espaço vazio 2 vezes
console.log(outraString.toLowerCase());//tudo minúsculo
console.log(outraString.toUpperCase());//tudo maiúsculo