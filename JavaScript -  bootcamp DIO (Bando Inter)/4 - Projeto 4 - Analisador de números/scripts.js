
let form = document.querySelector('form')
let n1 = document.querySelector('#n1')
let n2 = document.querySelector('#n2')
let btn = document.querySelector('button')
let res = document.querySelector('#res')



btn.onclick=function(refresh) {
    refresh.preventDefault()
    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    let soma = num1+num2
    let numeros = (num1==num2)?' são iguais.':' não são iguais.'
    function maiorMenor() {
        if (soma>20) {
            return ' maior que 10 e maior que 20.'
        }else {
            if (soma ==20) {
                return  ' maior que 10 e igual a 20'
            } else if (soma > 10) {
                return ' maior que 10 e menor que 20'
            } else if (soma==10){
                return ' igual a 10 e menor que 20'
            } else{
                return ' menor que 10 e menor que 20'
            }
        }
    }

    if (!num1||!num2) {
        alert('Caracteres inválidos!')
        res.innerHTML=''
    } else {
        res.innerHTML=`Os números ${num1} e ${num2}${numeros} Sua soma é ${soma}, que é ${maiorMenor()}.`        
    }

    form.reset()
}