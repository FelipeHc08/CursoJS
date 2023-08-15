let nome = 'João'; //declaração de variável - String

console.log(nome,'nasceu em 1984');
console.log('Em 2012', nome, 'se casou com Maria');

let idade; //declaração da variável
console.log(idade);
idade = 56;//inicialização da variável
console.log(idade);

/*
- Não podemos criar variáveis com palavras reservadas

Ex: let console;
    let if;

- Variáveis precisam ter nome significativos

Ex: let n = campoBaseDeDados
    console.log(campoBaseDeDados);

    Causa confusão

- Não pode começar o nome de uma variável com número

Ex: let 1nome;
    let n0me; -> pode

- Não podem conter espaços ou traços

Ex: let nome-Cliente; (camelCase)

- Case sensitive

Ex: let nomeCliente = 'José';
    let nomecliente = 'Antunes';

- Não podemos redeclarar variáveis com let

Ex: let nome = 'Bela';
    let nome = 'Adormecida';

- NÃO UTILIZAR VAR, UTILIZAR LET!!!
*/