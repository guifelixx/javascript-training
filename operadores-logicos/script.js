/*
Operadores lógicos

&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO

*/

//Para usar o AND todas as expressões precisam ser verdadeiras
const expressaoAnd = true && true && true && true
console.log(expressaoAnd);

const usuario = 'Guilherme'
const senha = '123456'

//Para o usuario logar no sistema, o usuario e o login tem que ser true, se uma das expressões estivem incorretas é false
const vaiLogar = usuario === 'Guilherme' && senha === '123456';
console.log(vaiLogar);

//O operador OR só retorna false se todas elas forem false
const expressaoOr = false || false || true || false;
console.log(expressaoOr);

// Com o operador NOT eu posos negar uma expressão, o que era true vai retornar false.
console.log(!true);

//Avaliação de curto-circuito

/*
REGRAS CURTO-CIRCUITO

false && qualquercoisa é avaliado em curto-circuito como falso.
true || qualquercoisa é avaliado em curto-circuito como verdadeiro.

*/

/*
Com o operador AND funciona assim:

Existem valores em JavaScript que são FALSY, sendo eles:

false
0
'' "" ``
null / undefined
NaN

*/

function falaOi () {
    return 'Oi';
}

let vaiExecutar //UNDEFINED

console.log(vaiExecutar && falaOi); //Como o primeiro operando é um valor FALSY, o resultado será o própio valor falsy -> undefined

/*
Caso a variavel vaiExecutar não seja vazia:

vaiExecutar é uma string não vazia ('Joãozinho'), que é um valor truthy em JavaScript.

Como vaiExecutar é truthy, o operador && avaliará e retornará o segundo operando, que é falaOi.

*/