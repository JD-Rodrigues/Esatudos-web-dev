// Escreva uma função que receba um Array com 3 números e imprima eles em ordem

function sortNumbers(...array) {
    array.sort()
    return array
}

console.log(sortNumbers(...[12,1,35]))