const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){

    if (numero === 2){
        console.log('Pulei o 2');   
        continue;//pula para a próxima interação do laço
    }

    console.log(numero);

    if (numero === 7){
        console.log('Encontrei');
        break;//encerra o laço
    }
}
