//Função contrutora -> É um molde para criar novos objetos / Usa o 'new' / Inicia com letra maiúscula / Prototipagem
//Função fábrica -> Não usa 'new' / Tem retorno explícito / Lógica interna / Encapsulamento

function Pessoa (nome, sobrenome){
    
    const ID = 1; // private

    const metodoInterno = function () {
        console.log('sou um método interno');
    };
    
    this.nome = nome;
    this.sobrenome = sobrenome;
    //não precisa de 'return', já está implícito
        
}

const p1 = new Pessoa ('José', 'Andrade');
const p2 = new Pessoa ('Maria', 'Andrade');

console.log(p1.nome);
console.log(p2.nome);
console.log(p1.metodoInterno);