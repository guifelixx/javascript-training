//Numbers
let num1 = 10.578084908408; //number
let num2 = 2.5; //number

console.log(num1.toString() + num2); //Transformar em STRTING
console.log(typeof num1) //No momento não está alterado para STRING
//num1 = num1.toString(); //Agora está convertido para STRING

console.log(num1.toFixed(2)); //Converter para quantas casas decimais eu quiser

console.log(Number.isInteger(num1)); //Verificar se o numero é int ou float

let temp = num1 * 'Olá' //REGRA: Nunca fazer contas com STRINGS
console.log(Number.isNaN(temp)); //Verificar se é NaN true or false

//IEEE 754-2008 (Imprecisão das contas)
let num3 = 0.7; //NUMBER FLOAT
let num4 = 0.1; //NUMBER FLOAT

num3 += num4; //0.8
num3 += num4; //0.9
num3 += num4; //1.0

//Forma de concertar a imprecisão utilizando funções
num3 = Number(num3.toFixed(2));

console.log(num3);
console.log(Number.isInteger(num3));

//Forma de concertar a imprecisão utilizando esta conta
let num5 = 0.5;
let num6 = 0.1;

num5 = ((num5 * 100) + (num6 * 100)) / 100; //0.6
num5 = ((num5 * 100) + (num6 * 100)) / 100; //0.7
num5 = ((num5 * 100) + (num6 * 100)) / 100; //0.8

console.log(num5);