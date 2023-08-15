const numero = Number(prompt('Digite um número: '));//Converte a const numero de String para Number
const numeroTitulo = document.getElementById('numero-titulo');//criar uma variável que seleciona o elemento HTML pelo Id e o armazena
const texto = document.getElementById('texto');

// OBS: EM HTML É RECOMENDADO QUE SÓ HAJA 1 ELEMENTO POR ID PARA EVITAR CONFLITO

numeroTitulo.innerHTML = numero; //elemento numero-titulo do arquivo HTML irá receber o valor do elemento numero
texto.innerHTML = `<p>A raiz do seu número é: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>Seu número (${numero}) é inteiro? ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p>Seu número (${numero}) é NaN? ${Number.isNaN(numero)} </p>`;
texto.innerHTML += `<p>Seu número (${numero}) arredondado para baixo é: ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p>Seu número (${numero}) arredondado para cima é: ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p>Seu número (${numero}) com duas casas decimais: ${numero.toFixed(2)} </p>`;