//Declaração de função (Function hoisting) -> Permite chamar a função antes mesmo de declará-la


falaOi();

function falaOi() {
    console.log('Oi');
};

//First-class object (objetos de primeira classe) -> as funções podem ser tratadas como dado
//Function expression

const souUmDado = function () {
    console.log('Sou um dado.');
};

souUmDado();

//Arrow function

const arrow = funcaoArrow = () => {
    console.log('Sou uma => arrow function');
};

funcaoArrow();

//Dentro de um objeto

const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
};

obj.falar();

