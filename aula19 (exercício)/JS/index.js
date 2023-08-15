function meuEscopo() {
    // Obtém o elemento HTML com a classe "form"
    const form = document.querySelector('.form');
    // Obtém o elemento HTML com a classe "resultado"
    const resultado = document.querySelector('.resultado');

    // Cria um array vazio chamado "pessoas"
    const pessoas = [];
    
    // Define uma função chamada "recebeEventoForm" que será executada quando o formulário for enviado
    function recebeEventoForm(evento){
        // Impede o comportamento padrão de envio do formulário (recarregar a página)
        evento.preventDefault();
        
        // Obtém os elementos HTML dentro do formulário com as classes específicas
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        // Adiciona um objeto com os valores dos campos ao array "pessoas"
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
       
        // Exibe o array "pessoas" no console
        console.log(pessoas);

        // Atualiza o conteúdo do elemento HTML "resultado" com os valores inseridos
        resultado.innerHTML += `<p>NOME:${nome.value} ${sobrenome.value} || PESO:${peso.value} Kg  || ALTURA:${altura.value}m</p>`;
    }

    // Adiciona um ouvinte de evento ao formulário para executar a função "recebeEventoForm" quando ele for enviado
    form.addEventListener('submit', recebeEventoForm);
}

// Chama a função "meuEscopo" para iniciar o comportamento definido
meuEscopo();



// form.onsubmit = function (evento){
//     evento.preventDefalut(); //previnir o que aconteceria por padrão
// };
