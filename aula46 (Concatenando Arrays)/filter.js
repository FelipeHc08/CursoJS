// Filter (filtrar), map (modificar), reduce (reduzir)
// Filter -> Sempre retorna um array com a mesma quantidade de elementos ou menos.

const numeros = [3, 12, 25, 37, 44, 10, 22, 7, 19, 41, 30, 48, 15, 26, 9];

function callbackFilter(valor) {
    // if (valor > 10){
    //     return true;
    // } else {
    //     return false;
    // } RESUMIDO:
    return valor > 10;
}

// Geralmente é utilizado o filter como função anônima:

const numerosFiltradosMenores = numeros.filter(valor => valor < 10);


console.log(numerosFiltradosMenores);

const numerosFiltrados = numeros.filter(callbackFilter);

console.log(numerosFiltrados);