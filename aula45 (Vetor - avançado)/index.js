const ano = 2024;
const tri = 1;
const numeroAleatorio = 98;

function formataNumeroAleatorio(valor) {
    // Converter o valor para uma string
    let numeroAleatorio = valor.toString();
    
    // Dividir a string em caracteres individuais
    let numeroAleatorioDividido = numeroAleatorio.split('');
    console.log(numeroAleatorioDividido); // Para depuração

    // Criar um array com 9 posições, todas preenchidas com '0'
    let numeroFormatado = new Array(9).fill('0');
    console.log(numeroFormatado); // Para depuração

    // Calcular o índice de início para inserir numeroAleatorioDividido em numeroFormatado
    let startIndex = numeroFormatado.length - numeroAleatorioDividido.length;
    console.log('startIndex: ', startIndex, 'numeroFormatado: ', numeroFormatado.length, 'numeroAleatorio: ', numeroAleatorioDividido.length);

    // Substituir as últimas posições de numeroFormatado com numeroAleatorioDividido
    for (let i = 0; i < numeroAleatorioDividido.length; i++) {
        numeroFormatado[startIndex + i] = numeroAleatorioDividido[i];
    }

    console.log(numeroFormatado); // Verificar o resultado final
}

// Testar a função com diferentes valores
formataNumeroAleatorio();   
// formataNumeroAleatorio(123456);   // Output: [ '0', '0', '0', '1', '2', '3', '4', '5', '6' ]
// formataNumeroAleatorio(987654321); // Output: [ '9', '8', '7', '6', '5', '4', '3', '2', '1' ]
// formataNumeroAleatorio(1);        // Output: [ '0', '0', '0', '0', '0', '0', '0', '0', '1' ]
