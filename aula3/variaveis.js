/*Regras para variáveis:

Não podemos criar variáveis com palavras reservadas pela linguagem
Variáveis precisam ter nomes significativos
Não podemos começar o nome de uma variável com um número
Não podem conter espaços ou traços
Utilizamos camelCase (Primeira letra da primeira palavra minisculo e primeira letra da segunda palavra maiusculo)
São Case-sensitive
Não podemos redeclarar variaveis com let
*/

let marido = 'Guilherme'; //Forma mais atual de declarar uma variável (utilizando let)
let esposa = 'Jéssica';
let filho = 'Daniel';

var name = 'Guilherme'; //Forma antiga de declarar variaveis (utilizado var)

let moradia; //variável declarada sem valor (undefined)
moradia = 'Apartamento'; // Iniciando a variavel de fato

console.log(marido, 'Nasceu em 2003');
console.log('Em 2022', marido, 'conheceu', esposa);
console.log(marido, 'casou-se com', esposa, 'em 2025.');
console.log(esposa, 'teve 1 filho com', marido, 'em 2027');
console.log('O filho de', marido, 'se chama', filho);

console.log(moradia);