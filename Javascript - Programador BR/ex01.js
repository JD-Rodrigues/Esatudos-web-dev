// Escreva uma função que receba dois números e retorne o maior deles

function biggerNumber(n1,n2) {
    if (n1>n2) {
        return `O maior número é ${n1}.`
    } else {
        return `O maior número é ${n2}.`
    }
    
}

console.log(biggerNumber(2,5))