//Para criar um objeto eu abro com {}
//Objetos são como variaveis, mas objetos recebem mais valores como o exemplo abaixo

const pessoa1 = {
    nome: 'Guilherme',
    sobrenome: 'Felix',
    idade: 25,

    //Quando pensamos em pessoas, sabemos que elas podem fazer. como:
//Andar, correr, praticar esporte e qualquer outra coisa. Isso em JavaScript quer dizer que meu objeto pode ter métodos, que são como se fossem ações para o objeto como no exemplo abaixo:
    falar() {
        console.log(`${pessoa1.nome} está dizendo 'Olá Mundo!'`)
    }
};

pessoa1.falar(); //Chamando a função

//Com uma função factory, podemos dizer que é uma fábrica de objetos, é um jeito mais produtivo de criar objetos.
function cadastroCarro (name, model, weight, color) {
    return {
        name: name, model: model, weight: weight, color: color};
}

const carro1 = cadastroCarro('Chevrolet', 'Astra', '850kg', 'Black')
const carro2 = cadastroCarro('Fiat', 'Argo', '600kg', 'White')
const carro3 = cadastroCarro('Mitsubishi', 'Lancer', '1000kg', 'DarkBlue')
const carro4 = cadastroCarro('Ford', 'Focus', '900kg', 'Red')
console.log(carro1) // Para acessar os valores do meu carro
console.log(carro2) // Para acessar os valores do meu carro
console.log(carro3) // Para acessar os valores do meu carro
console.log(carro4) // Para acessar os valores do meu carro


