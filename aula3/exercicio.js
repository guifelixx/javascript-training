//Calculo de IMC e ano de nascimento

const nome = 'Guilherme';
const sobrenome = 'Felix Pascoal';
const idade = 21;
const peso = 55;
const alturaEmMetros = 1.73;

let imc = peso / (alturaEmMetros * alturaEmMetros);
let anoNascimento = 2024 - idade;

//Template Strings
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${alturaEmMetros} de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);