try {
    console.log(erro);
    console.log('Abrir um arquivo');
    console.log('Manipulei uma arquivo e ocorreu um erro');
    console.log('Fechei o arquivo');
    //executada quando não há erros

    try {
        console.log(b);
    } catch (e) {
        console.log('Deu erro');
    }finally{
        console.log('Também sou executado');
    }

} catch (e) {
    //executada quando há erros
    console.log('Tratando o erro');
}finally {
    console.log('FINALLY: Eu sempre sou executado')
    //executado sempre
}


function retornaHora (data){
    
    if (data && !(data instanceof Date)){
        throw new TypeError ('Esperando instância de Date');
    }

    if (!data) {
        data = new Date ();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}

try{
const data = new Date ('01-01-1976 12:58:12');
const hora = retornaHora();
console.log(hora);
}catch(e) {
    //tratar erro
}finally{
    console.log('Tenha um bom dia.');
}