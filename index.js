/*
    If pode ser usado sozinho
    Sempre que utilizo else é necessário um if antes
    É possível ter vários else ifs na checagem
    Só se pode ter um else na checagem
    Pode-se utilizar condições sem else if, apenas com if e else
*/

//exemplo simples:

const hora = 1;

if (hora >= 0 && hora <= 12){
    console.log('Bom dia!');
} else if (hora >= 13 && hora <= 18){
    console.log('Boa tarde!');
} else if (hora >= 19 && hora <= 23){
    console.log('Boa noite!');
}else if (hora < 0){
    console.log('Erro!');
}