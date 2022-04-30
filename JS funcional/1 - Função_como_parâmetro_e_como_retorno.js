function calcular(n1,n2,fn) {
    return fn(n1,n2)
}

let soma = (a,b)=> a+b
let subtração = (a,b)=> a-b
let multiplicação = (a,b)=> a*b
let divisão = (a,b)=> a/b


console.log(calcular(2,3,divisão))
