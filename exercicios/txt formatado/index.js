const ano = 2024;
const tri = 1;
const numeroAleatorio = 98;

function formataNumeroAleatorio(valor) {
    // Converter o valor para uma string
    let numeroAleatorio = valor.toString();
    
    // Dividir a string em caracteres individuais
    let numeroAleatorioDividido = numeroAleatorio.split('');
    // console.log(numeroAleatorioDividido); // Para depuração

    // Criar um array com 9 posições, todas preenchidas com '0'
    let numeroFormatado = new Array(9).fill('0');
    // console.log(numeroFormatado); // Para depuração

    // Calcular o índice de início para inserir numeroAleatorioDividido em numeroFormatado
    let startIndex = numeroFormatado.length - numeroAleatorioDividido.length;
    // console.log('startIndex: ', startIndex, 'numeroFormatado: ', numeroFormatado.length, 'numeroAleatorio: ', numeroAleatorioDividido.length);

    // Substituir as últimas posições de numeroFormatado com numeroAleatorioDividido
    for (let i = 0; i < numeroAleatorioDividido.length; i++) {
        numeroFormatado[startIndex + i] = numeroAleatorioDividido[i];
    }

    let texto = ano.toString() + tri.toString() + numeroFormatado.join('');
    console.log(texto);

    // console.log(numeroFormatado); // Verificar o resultado final
    return texto;
}

function mostrarValor() {
    // Obtém a referência ao elemento <input>
    const input = document.getElementById('meuInput');
    
    // Obtém o valor do <input>, que será uma string, e converte para número
    const valor = Number(input.value);
    console.log(valor);
}
function generateTextFile() {
    // Exemplo de valor aleatório
    const input = document.getElementById('meuInput');
    const valor = Number(input.value);
    console.log(valor);
    // Formata o número
    const textoFormatado = formataNumeroAleatorio(valor);
    console.log(textoFormatado);
    // Cria o conteúdo do arquivo
    const content = textoFormatado;
    const fileName = 'EXEMPLO.txt';

    // Cria um blob com o conteúdo de texto
    const blob = new Blob([content], { type: 'text/plain' });
    
    // Cria uma URL para o blob
    const url = URL.createObjectURL(blob);
    
    // Cria um link de download
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    
    // Adiciona o link ao DOM
    document.body.appendChild(a);
    
    // Simula um clique no link para iniciar o download
    a.click();
    
    // Remove o link do DOM
    document.body.removeChild(a);
    
    // Revoga a URL do blob para liberar memória
    URL.revokeObjectURL(url);
}