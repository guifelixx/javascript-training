//Funções em JavaScript são definidas digitando "function", o nome da função, entre parenteses colocamos o parâmetro. E logo após chamamos a função atribuindo valor ao parâmetro "nome"

function saudacao(nome) {
    console.log(`'Bom dia! ${nome}`);
} 

//Posso reutilizar essa função quantas vezes eu quiser
saudacao('Guilherme');
saudacao('Jéssica')
saudacao('Carlos')

//Se eu quiser que minha função retorne alguma coisa, eu utilizo o "return", por padrão a função retorna undefined
function contaMath(a, b) {
    return a * b;
}

const multiplicacao = contaMath(5, 7); //Atribui a função e valores em uma variavel
console.log(multiplicacao); //E exibi na tela

//Mais um exemplo
function soma(x, y){
    const resultado = x + y;
    return resultado; //Para retornar o resultado, caso o contrario, ele retorna undefined
}

console.log(soma(10, 15))

//Também consigo atribuir valores ao parâmetros direto na função que podemos utilizar ao logo do sistema
function divisao(x = 10, y = 2) {
    const conta = x / y;
    return conta;
}

const conta = divisao() // Logo após podemos mudar esses valores mais tarde
console.log(conta);

//Outra forma de declarar:
const raiz = function (n) {
    return n ** 0.5
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

//Forma mais moderna de criar funções, a ARROW function

const subtracao = (n) => n - 5; // utilizamos "=>" no lugar do return

console.log(subtracao(10))