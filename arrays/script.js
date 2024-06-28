//Arrays são listas (coleção de coisas), podemos criar uma lista com tipos de dados number, string, boolean, null. Criamos uma Array abrindo colchetes [].
//                   0           1          2         3
const alunos = ['Guilherme', 'Carlos', 'Jéssica', 'Júlia'];
console.log(alunos);

//Diferente das strings, as Arrays são indexados por elementos dentro dela.
console.log(alunos[2]); //Podemos acessar o indice dessa forma, no caso imprimimos o indice dois que tem como valor "Jéssica"

//Editar valores dentro da Array.
alunos[1] = 'Juninho' //Informando o indice a ser trocado de valor
console.log(alunos);

//Adicionar elementos dentro da Array
alunos[4] = 'Nequinha' //Informamos um indice maior do que já existe
console.log(alunos);

//Saber o tamanho da Array
console.log(alunos.length);

//Adicionar um elemento ao final da lista
alunos.push('Otávio');
console.log(alunos);

//Adicionar um elemento no inicio da lista
alunos.unshift('Zézinho'); //Utilizando essa função, mudamos todos os indices da array, porque o elemento adicionado ao inicio empurra os outros
console.log(alunos);

//Remover um valor do final da lista
const removido = alunos.pop(); //No caso foi removido o "Otávio"
console.log(alunos); 
console.log(removido); //Podemos atribuir a uma variavel ou constante o item que foi removido da lista (pode ser útil)

//Remover um valor do começo da lista
alunos.shift();
console.log(alunos); //Nesse caso removemos o zezinho

//Remover valor de um indice mas manter o indice que ficará vazio
delete alunos[3];
console.log(alunos); //Nesse caso foi removido a "Júlia", ficando como <1 empty item> (undefined)

//Fatiar ums lista
console.log(alunos.slice(0, 3)); //[Guilherme Juninho Jéssica]

//Arrays são OBJETOS
console.log(typeof alunos); //Usamos o typeof para saber o tipo de dado
console.log(alunos instanceof Array); //Mas podemos comfirmar se estamos trabalhando com Arrays, no caso retornou true