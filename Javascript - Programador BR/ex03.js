//Escreva uma função que receba um Array com 5 números e retorne o maior deles
function biggerNumber(n1,n2) {
    if (n1 > n2) {
        return n1
    } else {
        return n2
    }
}


function biggerElement(array) {
    maior = array[0]
    for (num of array) {
        maior = biggerNumber(num,maior)
    }
    return maior
}

console.log(`O maior elemento é ${ biggerElement([8,6,4,10,14])}`)