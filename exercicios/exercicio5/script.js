const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

//Utilizamos o getElementById para retornar um elementom especificado na página HTML

numeroTitulo.innerHTML = numero;

//Atribuimos a uma variável e utilizamos a função innerHTML para imprimir na página

texto.innerHTML += `<p>Raiz quadrada ${numero ** 0.5} <br /></p>`;

texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)} <br /></p>`;

texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)} <br /></p>`;

texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)} <br /></p>`;

texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)} <br /></p>`;

texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)} <br /></p>`;