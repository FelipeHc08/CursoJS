function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const resultadoIMC = [];

    function recebeEventoForm(e) {
        e.preventDefault(); // Impede o comportamento padrão de recarregar a página

        const peso = parseFloat(form.querySelector('.peso').value);
        const altura = parseFloat(form.querySelector('.altura').value);

        if (!isNaN(peso) && !isNaN(altura)) {
            const IMC = peso / (altura * altura);
            resultadoIMC.push({
                peso: peso,
                altura: altura,
                IMC: IMC
            });

            resultado.innerHTML = `<p>Seu peso é ${peso}, sua altura é ${altura} e seu IMC é ${IMC.toFixed(2)}</p>`;
        } else {
            resultado.innerHTML = `<p>Valores inválidos de peso e/ou altura.</p>`;
        }
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
 