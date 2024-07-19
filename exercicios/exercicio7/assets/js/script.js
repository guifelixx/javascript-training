function calculaImc () {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    
    function calculo (evento) {
        evento.preventDefault();

        const peso = form.querySelector('.input-peso')
        const altura = form.querySelector('.input-altura')

        const imc = (peso.value / (altura.value ** 2)).toFixed(2)
        
        if (imc < 18.50) {
            resultado.innerHTML + `Seu IMC é ${imc} (Abaixo do peso)`;
        } else if (imc >= 18.50 && imc <= 24.90) {
            resultado.innerHTML + `Seu IMC é ${imc} (Peso normal)`;
        } else if (imc >= 25 && imc <= 29.90) {
            resultado.innerHTML + `Seu IMC é ${imc} (Sobrepeso)`;
        } else if (imc >= 30 && imc <= 34.90) {
            resultado.innerHTML + `Seu IMC é ${imc} (Obesidade grau 1)`;
        } else if (imc >= 35 && 39.90) {
            resultado.innerHTML + `Seu IMC é ${imc} (Obesidade grau 2)`;
        } else if (imc > 40) {
            resultado.innerHTML + `Seu IMC é ${imc} (Obesidade grau 3)`;
        } else {
            resultado.innerHTML + 'Valores inválidos';
        }
    }

    form.addEventListener('submit', calculo);
}

calculaImc();