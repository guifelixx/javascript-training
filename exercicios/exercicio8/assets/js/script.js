const date = new Date();
let dayWeek = date.getDay();
let month = date.getMonth();

//Uma função que formata o "day" para texto.
function addData (dayWeek) {
    let dayWeekText;

    //Formatar dia da semana
    switch (dayWeek) {
        case 0:
            dayWeekText = 'Domingo'
            return dayWeekText;

        case 1:
            dayWeekText = 'Segunda-feira'
            return dayWeekText;

        case 2:
            dayWeekText = 'Terça-feira'
            return dayWeekText;

        case 3:
            dayWeekText = 'Quarta-feira'
            return dayWeekText;

        case 4:
            dayWeekText = 'Quinta-feira'
            return dayWeekText;

        case 5:
            dayWeekText = 'Sexta-feira'
            return dayWeekText;

        case 6:
            dayWeekText = 'Domingo'
            return dayWeekText;
        
        default:
            dayWeekText = ''
            return dayWeekText;
    }

    //Formatar o mês para "string"
    function monthFormat (month) {
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
                monthText = 'Maio'
                return monthText;
    
            case 4:
                monthText = 'Junho'
                return monthText;
    
            case 5:
                monthText = 'Julho'
                return monthText;
    
            case 6:
                monthText = 'Agosto'
                return monthText;
    
            case 7:
                monthText = 'Setembro'
                return monthText;
    
            case 8:
                monthText = 'Outubro'
                return monthText;
    
            case 9:
                monthText = 'Novembro'
                return monthText;
    
            case 10:
                monthText = 'Dezembro'
                return monthText;
    
            default:
                monthText = ''
                return monthText;
        }
    }

    function formataData (dayWeek, month) {
        const day = zeroAEsquerda(date.getDate());
        const year = zeroAEsquerda(date.getFullYear());
        const hours = zeroAEsquerda(date.getHours());
        const minute = zeroAEsquerda(date.getMinutes());

        return `${dayWeek}, ${day} de ${month} de ${year} ${hours}:${minute}`
    }
}

addData();