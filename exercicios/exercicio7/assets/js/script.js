function calculaImc () {
    const form = document.querySelector('.form') //Selecionando meu form no DOM
    const resultado = document.querySelector('.resultado') //Selecionando minha div no DOM 

    
    function calculo (evento) {
        evento.preventDefault(); //Para não atualizar a página, evento: "submit"

        const peso = form.querySelector('.input-peso') //Selecionando elementos que foram digitado no input
        const altura = form.querySelector('.input-altura') //Selecionando elementos que foram digitado no input

        const imc = (peso.value / (altura.value ** 2)).toFixed(2) //Efetuando calculo imc dos valores passados e atribuindo a uma constante
        
        if (imc < 18.50) { //Estrutura condicional para cada valor de IMC
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Abaixo do peso)</p>`; //Utilizando o innerHTML para retornar a situação do usuario na minha div "resultado" 
        } else if (imc >= 18.50 && imc <= 24.90) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Peso normal)</p>`;
        } else if (imc >= 25 && imc <= 29.90) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Sobrepeso)</p>`;
        } else if (imc >= 30 && imc <= 34.90) {
            resultado.innerHTML =`<p>Seu IMC é ${imc} (Obesidade grau 1)</p>`;
        } else if (imc >= 35 && 39.90) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 2)</p>`;
        } else if (imc > 40) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 3)</p>`;
        } else {
            resultado.innerHTML = '<p>Valores inválidos</p>';
        }
    }

    form.addEventListener('submit', calculo);
}

calculaImc();