/*Regras para constantes:

Não podemos criar constantes com palavras reservadas pela linguagem
Constantes precisam ter nomes significativos
Não podemos começar o nome de uma constante com um número
Não podem conter espaços ou traços
Utilizamos camelCase (Primeira letra da primeira palavra minisculo e primeira letra da segunda palavra maiusculo)
São Case-sensitive
Não podemos redeclarar constantes
Não utilize VAR, utilize const
*/


//Constantes não podem ser alteradas ao longo do código.
const nome = 'Guilherme'; // string
console.log(nome);

const primeiroNumero = 5; // Number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof primeiroNumero); //Função para verificar o tipo da variavel