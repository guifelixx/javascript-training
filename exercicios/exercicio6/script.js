//Matar o envio do formulario porque vamos usar para nós mesmos
function meuEscopo () {
    const form = document.querySelector('.form'); //Selecionei elementos e atribui a uma Const
    const resultado = document.querySelector('.resultado') //Selecionar div que vai exibir os resultados

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({ //Adicionar objeto a lista "pessoas"
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        }) 

        console.log(pessoas); //Teste pra ver se a lista está armazenando corretamente
        
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}<br /></p>`; //Exibir minha div com os resultados
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
