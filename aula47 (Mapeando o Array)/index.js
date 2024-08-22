// Função map vai alterar valores do array

const numeros = new Array(10).fill(null);
let count = 0;

while (count < 10) {
    let randomNum = Math.floor(Math.random() * 51);
    if (!numeros.includes(randomNum)) {
        numeros[count] = randomNum;
        count++;
    }
}

console.log(numeros);

const numerosDobrados = numeros.map(valor => valor * 2);
console.log(numerosDobrados);
