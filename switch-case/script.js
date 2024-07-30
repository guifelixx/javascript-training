/*Onde eu deveria usar switch?

1 - Quando quero checar apenas uma váriavel

*/

const data = new Date('1987-04-21 00:00:00');
let diaSemana = data.getDay();
let diaSemanaTexto;

//Ao invés de verificar todas as condições desnecessáriamente até chegar na verdadeira ele vai dar um "break" e vai parar ali.

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo'
        break; //Sempre utilizar break!!!
    
    case 1:
        diaSemanaTexto = 'Segunda'
        break;
    
    case 2:
        diaSemanaTexto = 'Terça'
        break;
    
    case 3:
        diaSemanaTexto = 'Quarta'
        break;
    
    case 4:
        diaSemanaTexto = 'Quinta'
        return diaSemanaTexto;
    
    case 5:
        diaSemanaTexto = 'Sexta'
        break;
    
    case 6:
        diaSemanaTexto = 'Sábado'
        break;
    
    default:
    diaSemanaTexto = ''
}

console.log(diaSemana, diaSemanaTexto); //No caso ele vai imprimir "terça"

//Exemplo utilizando dentro de uma função:
function getDayWeekText (diaSemana) {
    let diaSemanaTexto2;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto2 = 'Domingo'
            return diaSemanaTexto2; //Sempre que a função encontra a palavra return ele vai parar também.
        
        case 1:
            diaSemanaTexto2 = 'Segunda'
            return diaSemanaTexto2;
        
        case 2:
            diaSemanaTexto2 = 'Terça'
            return diaSemanaTexto2;
        
        case 3:
            diaSemanaTexto2 = 'Quarta'
            return diaSemanaTexto2;
        
        case 4:
            diaSemanaTexto2 = 'Quinta'
            return diaSemanaTexto2
        
        case 5:
            diaSemanaTexto2 = 'Sexta'
            return diaSemanaTexto2;
        
        case 6:
            diaSemanaTexto2 = 'Sábado'
            return diaSemanaTexto2;
        
        default:
        diaSemanaTexto2 = ''
        return diaSemanaTexto2;
    }
}

const data2 = new Date('1987-04-24 00:00:00');
const diaSemana2 = data2.getDay();
const diaSemanaTexto2 = getDayWeekText(diaSemana2);

console.log(diaSemana2, diaSemanaTexto2);