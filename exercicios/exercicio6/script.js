//Matar o envio do formulario porque vamos usar para nós mesmos
function meuEscopo () {
    const form = document.querySelector('.form'); //Selecionar elementos como seletores do CSS
    const resultado = document.querySelector('.resultado') //Selecionar div que vai exibir os resultados

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
