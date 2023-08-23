const nome = 'Felipe Henrique';
const sobreNome = 'Campos César';
const peso = 64;
const alturaMetro = 1.79;
const anoNascimento = 2003;
let IMC;
let idade;

IMC = peso / (alturaMetro * alturaMetro);
idade = 2023 - anoNascimento;

console.log(nome + '' + sobreNome, 'tem', idade, `anos pesa ${peso} Kg tem`, alturaMetro, 'nasceu em', anoNascimento, 'tem', idade, 'anos e seu IMC é igual a: ', IMC);

// 3 maneiras de fazer o template de Strings