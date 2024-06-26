//Objeto Math
let num1 = 9.56773;

//Arredondar ele para baixo
let num2 = Math.floor(num1);
console.log(num2); //Numero arredondado para 9

//Arredondar para cima
let num3 = Math.ceil(num1);
console.log(num3); //Numero arredondado para 10

//Arredondar para o mais próximo
let num4 = Math.round(num1);
console.log(num4); // Numero arredondado para o 10, se a variavel tiver um valor acima de 9.50 ele arredonda para cima, se for menor ele arredonda para baixo

//Achar qual é o maior número
console.log(Math.max(1,2,4,5,6,7,8,9,10,-1,-2,-3, 100)); // 100 é o maior número

//Achar qual é o menor número
console.log(Math.min(1,2,4,5,6,7,8,9,10,-1,-2,-3, 100)); // -3 é o menor número

//Gerar números aleatórios
const aleatorios = Math.round(Math.random() * (10 - 5) + 5); // Nesse caso estou retornando numeros aleatórios entre 10 e 5
console.log(aleatorios);

//Valor de PI
console.log(Math.PI); // Retornar o valor de PI

//Potenciação
console.log(Math.pow(2, 10)); //2 elevado a 10
console.log(2 ** 10);

//Raiz quadrada de duas formas 
let num5 = 9;
console.log (Math.round(num1 ** 0.5)); //A raiz quadrada de 9 é 3 
console.log (Math.round(num1 ** (1/2)));

//Dividir por zero (Uma das unicas linguagens que divide por zero)
console.log(100 / 0); //Retorna o tipo de dado: Infinity