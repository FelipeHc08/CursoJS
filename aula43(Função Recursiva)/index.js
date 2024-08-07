//Função Recursiva é uma função que "chama ela mesma"
//OBS: Existe um limite de memória do navegador para chamar a função

function recursiva(max){
    if(max >= 10) return;
    max++;
    console.log(max);
    recursiva(max); //Se tornou uma função recursiva aqui!
}

recursiva(0);