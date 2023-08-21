function getDiaSemanaTexto (diaSemana) {

    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;//RETURN encerra a função, realizando o papel de BREAK.
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
    
        default:
            diaSemanaTexto = '';
            break;
    }
}// a função torna o código menor, pois pode ser reutilizada sempre que preciso.

const data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

//Geralmente a estrutura SWITCH CASE é utilizada para checar apenas uma variável

console.log(diaSemanaTexto);

// switch (diaSemana) {//checa a variável
//     case 0://if === 0
//         diaSemanaTexto = 'Domingo';//altera
//         break;//encerra o switch, caso satisfaça o CASE
//     case 1:
//         diaSemanaTexto = 'Segunda';
//         break;
//     case 2:
//         diaSemanaTexto = 'Terça';
//         break;
//     case 3:
//         diaSemanaTexto = 'Quarta';
//         break;
//     case 4:
//         diaSemanaTexto = 'Quinta';
//         break;
//     case 5:
//         diaSemanaTexto = 'Sexta';
//         break;
//     case 6:
//         diaSemanaTexto = 'Sábado';
//         break;

//     default:
//         diaSemanaTexto = '';
//         break;
// }


// if (diaSemana === 0){
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1){
//     diaSemanaTexto = 'Segunda'
// } else if (diaSemana === 2){
//     diaSemanaTexto = 'Terça'
// } else if (diaSemana === 3){
//     diaSemanaTexto = 'Quarta'
// } else if (diaSemana === 4){
//     diaSemanaTexto = 'Quinta'
// } else if (diaSemana === 5){
//     diaSemanaTexto = 'Sexta'
// } else if (diaSemana === 6){
//     diaSemanaTexto = 'Sábado'
// } else {
//     diaSemanaTexto = '';
// }

