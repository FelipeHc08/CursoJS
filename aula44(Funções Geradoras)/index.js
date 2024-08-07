// Possuem um recurso especial, podem quase "pausar" o código em algum local
// Lazy avaliation

function* geradora1(){
    // Código qulaquer
    yield 'Valor 1';  // Pausa a função aqui e retorna um valor
    // Código qulaquer
    yield 'Valor 2';
    // Código qulaquer
    yield 'Valor 3'; 
}

const g1 =  geradora1();
for (let valor of g1) {
    console.log(valor);
}

function* geradora2(){
    yield 1;
    yield 2;
    yield 3;
}

function* geradora3(){
    yield* geradora2();  // Uma função geradora pode continuar o processo iniciado por outra
    yield 4;
    yield 5;
    yield 6;
}

const g3 = geradora3();
for (let valor of g3){
    console.log(valor);
}