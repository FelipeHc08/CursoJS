// // const data = new Date(); //função construtora

// // console.log(data.toString());//exibe a data no formato americano

// const dataInicial = new Date(0); // -> 01/01/1970 -> Timestamp unix ou época unix

// console.log(dataInicial.toString()); // exibe 31/12/1969 21h --> Horário padão de Brasília (GMT - 03:00)

// //OBS -> no JavaScript a hora é baseada em milésimos de segundo, logo, para criar uma variável com valor de três horas, ficaria assim:

// //                s    s    h     ms
// const tresHoras = 60 * 60 * 3 * 1000;
// const dataInicialSemFuso = new Date (0 + tresHoras);//soma três horas ao marco 0

// console.log(dataInicialSemFuso);//marco 0 exato.

// //seguindo a mesma lógica, um dia seria:

// //const umDia = 60 * 60 * 24 * 1000;

// //Pra criar uma data específica:

// //                               ano  mês dia hora min ms
// const dataEspecifica = new Date (2019, 10, 23, 17, 27, 500);//OBS: Em JavaScript, o mês se inicia em 0, sendo 0 = Janeiro, 1= Fevereiro, e assim por diante...
// console.log(dataEspecifica);

// //OBS2: A LÓGICA DOS LIMITES SEGUE DA SEGUINTE MANEIRA -> segundos vão até 59, caso digite 60 os minutos aumentarão em 1, e assim segue em mês, dia, hora e milissegundo

// //OBS 3: Caso seja omitido alguma informação, será inicializado o valor mínimo. Ex: dia 01, hora 0, minuto 0, segundo 0... com EXCEÇÃO DO MÊS, que não pode ser omitido pois o valor será entendido como milissegundos.

// // Outro formato de data (String):

// const dataString = new Date ('2019-11-23 20:20:59.100');//separar data e hora com espaço ou T -> ('2019-11-23T20:20:59.000')
// console.log(dataString);

// console.log('Dia:', data.getDate());
// console.log('Mês:', data.getMonth() + 1);//Mês começa do 0
// console.log('Ano:', data.getFullYear());
// console.log('Hora:', data.getHours());
// console.log('Min:', data.getMinutes());
// console.log('Seg:', data.getSeconds());
// console.log('Ms:', data.getMilliseconds());
// console.log('Dia semana:', data.getDay() + 1);//0 -> Domingo



//EXEMPLO DE FUNCTION PARA FORMATAR A DATA

function zeroAEsquerda (num){
    return num >=10 ? num : `0${num}`; 
}
    function formataData (data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date ();
const dataBrasil = formataData(data);
console.log(dataBrasil);