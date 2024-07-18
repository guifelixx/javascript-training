function calculaImc () {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    function calculo (evento) {
        evento.preventDefalut();

        const peso = form.querySelector('#input-peso')
        const altura = form.querySelector('#input-altura')

        const imc = peso.value / (altura.value ** 2)

        console.log(imc);
    }

    form.addEventListener('submit', calculo)
}

calculaImc();