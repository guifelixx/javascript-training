const date = new Date();
let dayWeek = date.getDay();
let month = date.getMonth();

function formataData () { //Função que formata a forma como a data vai ser exibida na web
    const diaSemana = dayFormat();
    const mes = monthFormat();

    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minute = date.getMinutes();

    return `${diaSemana}, ${day} de ${mes} de ${year} ${hours}:${minute}`
}

//Uma função que formata o "day" para texto.
function dayFormat () {
    let dayWeekText;

    //Formatar dia da semana
    switch (dayWeek) {
        case 0:
            dayWeekText = 'domingo'
            return dayWeekText;

        case 1:
            dayWeekText = 'segunda-feira'
            return dayWeekText;

        case 2:
            dayWeekText = 'terça-feira'
            return dayWeekText;

        case 3:
            dayWeekText = 'quarta-feira'
            return dayWeekText;

        case 4:
            dayWeekText = 'quinta-feira'
            return dayWeekText;

        case 5:
            dayWeekText = 'sexta-feira'
            return dayWeekText;

        case 6:
            dayWeekText = 'Domingo'
            return dayWeekText;
        
        default:
            dayWeekText = ''
            return dayWeekText;
    }
}

//Formatar o mês para texto
function monthFormat () {
    let monthText;
    
    switch (month) {
        case 0:
            monthText = 'Janeiro'
            return monthText;

        case 1:
            monthText = 'Fevereiro'
            return monthText;

        case 2:
            monthText = 'Março'
            return monthText;

        case 3:
            monthText = 'Abril'
            return monthText;
            
        case 4:
            monthText = 'Maio'
            return monthText;

        case 5:
            monthText = 'Junho'
            return monthText;

        case 6:
            monthText = 'Julho'
            return monthText;

        case 7:
            monthText = 'Agosto'
            return monthText;

        case 8:
            monthText = 'Setembro'
            return monthText;

        case 9:
            monthText = 'Outubro'
            return monthText;

        case 10:
            monthText = 'Novembro'
            return monthText;

        case 11:
            monthText = 'Dezembro'
            return monthText;

        default:
            monthText = ''
            return monthText;
    }
}

function addData () {
    const formatDate = formataData();
    const resultado = document.querySelector('.result')

    resultado.innerHTML = `<p>${formatDate}</p>`;
}

addData();