// Escreva um programa que receba um array de objetos com as propriedades altura e idade e imprima: A maior e menor altura e a média da idade

let objArray = [
    {altura:1.71,idade:29},
    {altura:2,idade:21},
    {altura:1.85,idade:25}
]

let biggerHeight = 0
let smallerHeight = 0
let ageSum = 0


for (obj of objArray) {
    if (objArray.indexOf(obj)==0) {
        biggerHeight = smallerHeight = obj.altura
    } else if (obj.altura > biggerHeight) {
        biggerHeight = obj.altura
    } else if (obj.altura < smallerHeight) {
        smallerHeight = obj.altura
    }
    ageSum += obj.idade
}

let averAge = ageSum/objArray.length

console.log(`A maior altura é ${biggerHeight} m. A menor altura é ${smallerHeight} m. A média das idades é ${averAge.toFixed(1)} anos.`)

