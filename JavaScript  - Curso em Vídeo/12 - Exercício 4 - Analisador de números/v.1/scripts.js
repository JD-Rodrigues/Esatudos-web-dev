
var numero = document.querySelector('#num')
var add = document.querySelector('#add')
var select = document.querySelector('select')
var btnAnalise = document.querySelector('#btn')
var resultado = document.querySelector('.res')
var listaNum = []
var soma = 0
add.addEventListener('click', adicionar)
btnAnalise.addEventListener('click', analisar)

function adicionar() {
    resultado.innerHTML=''
    if (numero.value.length==0) {
        alert('Insira um número!')
    } else if (numero.value >0 && numero.value <=100) {
        var opt = document.createElement('option')
        opt.innerHTML=`O número ${numero.value} foi adicionado.`
        select.appendChild(opt) 
        listaNum.push(numero.value)  
        soma=soma+Number(numero.value)
    } else {
        alert('Insira um número de 1 a 100.')
    }
}

function analisar() {
    if (select.length==0) {
        alert('Insira um número antes de finalizar!')
    } else {
    var numCad = document.createElement('p')
    var maior = document.createElement('p')
    var menor = document.createElement('p')
    var sum = document.createElement('p')
    var media = document.createElement('p')
    numCad.innerHTML=`Ao todo, temos ${select.length} números cadastrados.`
    maior.innerHTML=`O maior valor informado foi ${Math.max.apply(null, listaNum)}.`
    menor.innerHTML =`O menor valor informado foi ${Math.min.apply(null, listaNum)}.`
    sum.innerHTML = `Somando todos os valores, temos ${soma}.`
    media.innerHTML = `A média dos valores digitados é ${soma/select.length}.`
    resultado.appendChild(numCad)
    resultado.appendChild(maior)
    resultado.appendChild(menor)
    resultado.appendChild(sum)
    resultado.appendChild(media)
    }    
}