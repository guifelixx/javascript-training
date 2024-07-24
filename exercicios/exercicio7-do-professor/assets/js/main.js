// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault(); //Prevenindo evento do button
  const inputPeso = e.target.querySelector('#peso'); //Selecionando o input do peso
  const inputAltura = e.target.querySelector('#altura'); //Selecionando o input da atlura

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) { //Estrutura que checa se o valor do peso é válido (Se é number)
    setResultado('Peso inválido', false);
    return; //Return para parar a função caso seja inválido
  }

  if (!altura) { //Estrutura que checa se o valor da altura é válido (Se é number)
    setResultado('Altura inválida', false);
    return; //Return para parar a função caso seja inválido
  }

  const imc = getImc(peso, altura); //Atribuindo a função que vai fazer o calculo do imc em uma constante
  const nivelImc = getNivelImc(imc); //Atribuindo a função que vai definir o nivel de imc em uma constante.

  const msg = `Seu IMC é ${imc} (${nivelImc}).`; //Mensagem que vai ser exibida na div #resultado 

  setResultado(msg, true); //Atribuindo a "msg" e true como argumento para exibir a mensagem final se ela for verdadeira.
});

function getNivelImc (imc) { //Função com os níveis de imc de acordo com cada resultado, ela vai checar o resultado e retornar seu respectivo nível
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; //Array com os níveis de cada IMC

  if (imc >= 39.9) return nivel[5]; //Condições para retornar o respectivo nível:
  if (imc >= 34.9) return nivel[4]; // Quando meu if checa só uma linha não tem necessidade de utlizar chaves
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) { //Função que calcula o imc
  const imc = peso / altura ** 2;
  return imc.toFixed(2); //Convertendo o valor com duas casas decimais
}

function criaP () { //Função que cria um paragráfo <p>
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) { //Função que vai adcionar o resultado do calculo do IMC
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = ''; //Resultado começa em branco

  const p = criaP(); //Atribui a função criaP a uma constante

  if (isValid) { // Se o "isValid" for "true", ele vai exibir o resultado com o respectivo nível em verde para indicar que deu certo
    p.classList.add('paragrafo-resultado'); //Atribui uma classe ao "<p>" caso 
  } else { //Se "isValid" não for "true" ele vai retornar a div em vermelho para indicar que os valores são invalidos (diferentes de number)
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p); // Adicionando o "filho" que é o "paragráfo" do resultado paragráfo no elemento pai que é a div "resultado"
}
