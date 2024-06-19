//Strings são indexadas, iteráveis ou seja, possuem indice

//Escapar aspas  0123456789
let umaString = "Um \"texto\"";

console.log(umaString);

console.log(umaString.indexOf('texto')); //Encontrar o indice

console.log(umaString.lastIndexOf('m', 3)) //Encontrar indice de trás pra frente

console.log(umaString[0]); //Imprimir indice

console.log(umaString.charAt(7)); //Imprimir indice

//Expressões regulares
console.log(umaString.match(/[a-z]/g)); //Atribuindo a array
console.log(umaString.match(/[a-z]/));

let duasString = 'O rato roeu a roupa do rei de roma' //Exemplo com string maior

console.log(umaString.replace('Um', 'Outro')); //Substituir valores: primeiro argumento(valor que quer substitur), segundo argumento(valor que vai atribuir)
console.log(duasString.replace(/r/g, '#')); //Substituindo todos os 'r' por '#' na String


console.log(umaString.search(/x/)); //Similar ao indexOf, aceita expressões regulares

//Concatenar
console.log(umaString.concat(' em', ' um', ' lindo dia.')); //Usando a função concat
console.log(umaString + ' em um lindo dia.'); //Usando operador +
console.log(`${umaString} em um lindo dia`); //Usando template-string


