//Usamos estruturas condicionais para performar diferentes ações para diferentes decisãos

//if pode ser usado sozinho
//Sempre que utilizo a palavra "else" e "else if", preciso de um if antes
//Eu posso ter vários else ifs na checagem
//Podemos usar condições sem else if, utilizando apenas if e else

/*
ENTRE 0 - 11 - Bom dia
ENTRE 12 - 17 - Boa tarde
ENTRE 18 - 23 - Boa noite
*/

const hora = 19;

if (hora >= 0 && hora <= 11) { // Se hora for maior ou igual a 0 AND menor e igual a 11, meu algoritmo vai dizer bom dia.
    console.log('Bom dia');

} else if (hora >= 12 && hora <= 17) { // Se hora for maior ou igual a 12 AND menor e igual a 17, meu algoritmo vai dizer boa tarde.
    console.log('Boa tarde');

} else if (hora >= 18 && hora <= 23) { // Se hora for maior ou igual a 18 AND menor e igual a 23, meu algoritmo vai dizer boa noite.
    console.log('Boa noite');

} else { // Se hora estiver fora de 0 a 23 ele vai imprimir "Olá", porque ele não sabe a hora.
    console.log('Ola');
}