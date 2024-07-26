//Objeto date

const data = new Date(); //Função que cria uma data
console.log(data.toString());

const data1 = new Date(2019, 3, 20, 15, 14, 27); //Função que cria uma data com argumento passados
console.log(data1.toString()); // a, m, d, h, m, s, ms

const data2 = new Date('2019-04-20 20:20:59'); //Pssando os argumentos em string
console.log(data2.toString());

const data3 = new Date();
console.log('Dia', data3.getDate());
console.log('Mês', data3.getMonth() + 1);
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Min', data3.getMinutes());
console.log('Seg', data3.getSeconds());
console.log('ms', data3.getMilliseconds());
console.log('Dia semana', data3.getDay());
console.log(data3.toString());

//Função para formatar data:

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}` //Se num for diferente que num >= 10 ele vai adicionar um zero a esquerda do número sozinho, exemplo: 7 -> 07. 
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data4 = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);