/* Escreva uma função chamada ePaisagem que 
recebe dois argumentos, largura e altura de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem.
*/

const ePaisagem = (altura, largura) => altura / largura === 16 / 9 ? true : false;

console.log(ePaisagem(3840, 2160));