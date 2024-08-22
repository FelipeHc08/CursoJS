let numero = [];
function gerarJogo() {
    var jogoSelecionado = document.getElementById('jogo');
    var valor = parseInt(jogoSelecionado.value);
    console.log("O valor do input é: " + valor);
    switch (valor) {
        case 1:
            numero = new Array(6).fill(0).map(() => Math.floor(Math.random() * 60));
            alert(`Números da sorte: ${numero.join(' ')}`);
            break;
        case 2:
            numero = new Array(5).fill(0).map(() => Math.floor(Math.random() * 80));
            alert(`Números da sorte: ${numero.join(' ')}`);
            break;
        case 3:
            numero = new Array(15).fill(0).map(() => Math.floor(Math.random() * 25));
            alert(`Números da sorte: ${numero.join(' ')}`);
            break;
    }
}
console.log(gerarJogo()); 
