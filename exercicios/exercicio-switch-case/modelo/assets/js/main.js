function dataHoje(){
    
    const hoje = document.querySelector('.hoje');
    const tempo = new Date();
    const diaSemana = tempo.getDay();
    const data = tempo.getDate();
    const mes = tempo.getMonth();
    const ano = tempo.getFullYear();
    const hora = tempo.getHours();
    const minutos = tempo.getMinutes();
    
    
    function diaSemanaTexto (diaSemana){
        
        switch (diaSemana) {
            case 0:
                diaSemana = 'Domingo';
                return diaSemana;
            case 1:
                diaSemana = 'Segunda';
                return diaSemana;
            case 2:
                diaSemana = 'Terça';
                return diaSemana;
            case 3:
                diaSemana = 'Quarta';
                return diaSemana;
            case 4:
                diaSemana = 'Quinta';
                return diaSemana;
            case 5:
                diaSemana = 'Sexta';
                return diaSemana;
            case 6:
                diaSemana = 'Sábado';
                return diaSemana;
        
            default:
                diaSemana = '';
                break;
        }
    }

//OBS - PARA ENCURTAR O CÓDIGO, SUBSTITUÍ A ESTRUTUTRA DE SWITCH CASE POR:

    function mesTexto (mes){

        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];//array com os meses do ano

        return meses[mes];//retorna o mês de acordo com sua posição no array
    }

    hoje.innerHTML = `<h1>${diaSemanaTexto(diaSemana)}-feira, ${data} de ${mesTexto(mes)} de ${ano} <br>${hora}:${minutos}</h1>`;
    
}

dataHoje();