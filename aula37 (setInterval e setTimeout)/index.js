const mostraHora = () => {
    
    let data = new Date ();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}

console.log(mostraHora());

//setInterval(); - essa função vai configurar um intervalo de tempo para que uma função seja executada em determinado momento


const timer = setInterval(function ()  {
        console.log(mostraHora());
    }, 1000);//será executada essa função a cada 1000 milissegundos, 1 segundo.

setTimeout (function () {
    clearInterval(timer);//irá interromper a const timer em 5 segundos.
}, 5000);

