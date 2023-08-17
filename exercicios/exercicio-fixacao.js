const numeros = [10, 5, 8, 20, 15];

function calcularMedia(numeros) {
    let soma = 0; 
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma / numeros.length; 
}

const media = calcularMedia(numeros);
console.log(`A média dos números é: ${media}`);

/*
    ERROS QUE COMETI:
    declarar soma como const
    erro de digitação (lenght)
    não chamei o return da function 
*/
