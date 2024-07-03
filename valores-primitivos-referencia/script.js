//Dados primitivos - string, number, boolean, undefined, null (bigint, stm)

//Dados primitivos são imutáveis, especificamente o valor:

let num = 10; // num é uma variável que contém o valor 10, um dado primitivo do tipo número

num = 20; // Aqui, não estamos modificando o valor 10 diretamente, mas sim substituindo-o por 20

console.log(num); // Output será 20

let str = "Olá"; // str é uma variável que contém a string "Olá", um dado primitivo do tipo string

str = "Olá, mundo!"; // Aqui, não estamos modificando a string "Olá", mas sim substituindo-a por uma nova string "Olá, mundo!"

console.log(str); // Output será "Olá, mundo!"

//Dados por referência (mutável) -array, object e function

let a = [1, 2 ,3]; //Variável do tipo array

let b = a; //Atribuindo o valor a para b

console.log(a, b); //Imprimindo os dois que ocupam o mesmo espaço na memória

a.push(4); //Adicionei o o valor 4 ao final da lista
console.log(a, b); //E os dois continuam apontando para o mesmo valor na memṕria

//Exemplo com objetos:
const pessoa1 = {
    nome: 'Guilherme',
    sobrenome: 'Felix'
};

const pessoa2 = pessoa1; //Os dois apontando para o mesmo valor da mémoria (pessoa1 e pessoa2)

pessoa1.nome = 'Zézinho'; //Atribuindo Zézinho a "nome" no lugar de "Guilherme"
console.log(pessoa2); //Ao imprimir, vemos que foi modificado

//PRA ENTENDER DE VEZ:
a = [1, 2 , 3];
b = a;
 
// [ 1, 2, 3 ] [ 1, 2, 3 ]
console.log(a, b);
 
b.pop();
// [ 1, 2 ] [ 1, 2 ]
console.log(a, b);
 
// Reatribuição
b = 'outra coisa'
// [ 1, 2 ] outra coisa
console.log(a, b);