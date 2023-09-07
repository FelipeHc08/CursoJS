//Não é interessante exibir os erros do código ao usuário, 
//pois não trás uma boa experiência além de ser potencialmente perigoso.

try {
    console.log(naoExisto);
} catch (err) { // --> o erro do código fica armazenado na variável err.
    console.log('ERRO - A variável informada não existe');
}


function soma (x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error ('X e Y precisam ser números');
    }
    return x + y;
}
try{
console.log(soma(1, 2));
console.log(soma('A', 2));
} catch(error){
    console.log('Lançar alguma coisa mais amigável para o usuário');
}