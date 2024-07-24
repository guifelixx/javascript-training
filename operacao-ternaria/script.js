/*
Operador ternario

condicao ? 'valor verdadeiro' : 'valor para falso';

1 - Uma expressão que é avaliada entre true or false
2 - Expressões de valores de qualquer tipo

*/

//Nesse exemplo estou checando se meu usário tem 1000 ou mais pontos, se ele tiver é um usuário vip, se não tiver, é um usuário normal.
const pontuacaoUsuario = 1000;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

console.log(nivelUsuario);

//Nesse exemplo estou checando se PI é maior que 4, oque é false e vai retornar "Nope"

let checaValor = Math.PI > 4 ? "Yep" : "Nope";
console.log(checaValor);
