const verdadeira = true;

//let tem escopo de bloco {... tudo entre chaves}
//var só tem escopo de função

let nome = 'José';//criando
var nome2 = 'Gabriel';//criando

var nome2 = 'Luiz';//redeclarada --> aqui a variável var pode sim ser redeclarada no mesmo escopo

console.log(nome, nome2);// -> José Luiz

//let nome = 'Otavio' --> Aqui não pode ser redeclarado a variável let, pois está no mesmo escopo

if (verdadeira) {
    let nome = 'Otavio';//criando dentro deste bloco, outra variável nome
    var nome2 = 'Felipe';//redeclarando a variável
    console.log(nome, nome2);//->Otávio Felipe
    if (verdadeira){
        let nome = 'Outra coisa';
        var nome2 = 'Qualquer';
        console.log(nome, nome2, 'BLOCO ALINHADO');//-> Outra coisa Qualquer
    }
}

//a ferramenta JavaScript faz a busca da variável por bloco

console.log(nome, nome2);//-> aqui a saída sera José e Qualquer, pois o valor nome foi declarada como let no escopo global, já a variável var nome2 foi redeclarada várias vezes ao longo desse código, atribuindo-se o último valor declarado.


//Exemplo na função:

var sobrenome = 'Pereira';

function falaOi(){
    var emprego = 'Encanador';
    console.log(sobrenome);//a função acessa variáveis definidas fora dela ("vizinhas").
}

// console.log(emprego); --> a função não permite que variáveis criadas dentro dela sejam acessadas por fora.
falaOi();