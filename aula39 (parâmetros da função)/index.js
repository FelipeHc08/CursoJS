function funcao() {
    console.log('Oi');
    console.log(arguments);//aqui serão exibidos os valores armazenados
    console.log('O argument na posição [1] é: ', arguments[1]);
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8); //será exibido apenas o return da função, os argumentos serão armazenados na variável 'arguments' que sustenta todos os argumentos eviados