
// Escreva uma função que receba uma data e retorne um objeto com as propriedades dia, mês e ano Referentes a essa data.

function objDate(day,month,year) {
    let obj = {}
    obj.dia = day
    obj.mês = month
    obj.ano = year

    return obj
}

console.log(objDate(26,02,1989))