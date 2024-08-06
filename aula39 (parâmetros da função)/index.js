function funcao() {
    console.log('Oi');
    console.log(arguments);//aqui serão exibidos os valores armazenados
    console.log('O argument na posição [1] é: ', arguments[1]);
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8); //será exibido apenas o return da função, os argumentos serão armazenados na variável 'arguments' que sustenta todos os argumentos eviados

//nessa função será realizada a soma de todos os arguments
function soma(a, b, c) {//aqui são declara os argumento que sustentam todos os argumentos enviados. 
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total, a, b, c);//Neste exemplo a, b e c terão o mesmo valor dos três primeiros valores inseridos
}

soma(1,2,3,4,5,6,7,8,9);

function evitaNan (a, b){ // na maneira mais moderna d se fazer: (a, b = 0)
    b = b || 0; //aqui b receberá o valor de b (se informado), caso não seja informado nenhum valor, b= 0; (maneira antiga)
    console.log(a + b); // caso fosse informado somente o valor de a, o console iria retornar NaN
} 
evitaNan(1);   