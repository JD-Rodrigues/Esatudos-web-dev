let calc = (operação,n1,n2) => {
    return operação(n1,n2)
} 


let soma = (n1,n2) => n1+n2;

let sub = (n1,n2) => n1-n2;

let resSoma = calc(soma, 2,3)
let resSub = calc(sub, 2,3)

console.log(resSub)