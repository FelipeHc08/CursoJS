// return
// retorna um valor
// termina a função


function soma(a, b) {
    return a + b;
}

function soma2(a, b) {
    console.log(a + b);
}

soma2(1, 5);

console.log('teste')

document.addEventListener('click', function () {
    document.body.style.backgroundColor = 'red';
    //função não retorna nada, mas realiza uma ação
});


function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!')

//console.log(olaMundo); //olaMundo se tornou uma função, pois a função externa cama a função interna
console.log(resto);


//ONDE SERIA ÚTIL?

// function duplica(n) {
//     return n * 2;
// }

// function triplica(n) {
//     return n * 3;
// }

// function quadriplica(n) {
//     return n * 4;
// }

function criaMultiplicador(multiplicador) {
    //multiplicador
    return function (n){
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));