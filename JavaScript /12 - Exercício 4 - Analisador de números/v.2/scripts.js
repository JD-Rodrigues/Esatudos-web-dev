
var numero = document.querySelector('#num')
var add = document.querySelector('#add')
var select = document.querySelector('select')
var btnAnalise = document.querySelector('#btn')
var resultado = document.querySelector('.res')
var listaNum = []
var soma = 0
add.addEventListener('click', adicionar)
btnAnalise.addEventListener('click', analisar)

function isvalid(n) {
    if (Number(numero.value) > 0 && Number(numero.value) <= 100) {
        return true
    } else {
        return false
    }
}

function inlist(n,l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    resultado.innerHTML=''
    if (numero.value.length==0) {
        alert('Insira um número!')
    } else if (isvalid(numero.value)&& !inlist(numero.value,listaNum)) {
        var opt = document.createElement('option')
        opt.innerHTML=`O número ${numero.value} foi adicionado.`
        select.appendChild(opt) 
        listaNum.push(numero.value)  
        soma=soma+Number(numero.value)
    } else {
        alert('Número inválido ou já contido na lista.')
    }
    numero.value=''
    numero.focus()7
}


function analisar() {
    if (select.length==0) {
        alert('Insira um número antes de finalizar!')
    } else {      

    resultado.innerHTML=`<p>Ao todo, temos ${select.length} números cadastrados.</p>`

    resultado.innerHTML+=`<p>O maior valor informado foi ${Math.max.apply(null, listaNum)}.</p>`

    resultado.innerHTML+=`<p>O menor valor informado foi ${Math.min.apply(null, listaNum)}.</p>`

    resultado.innerHTML+=`<p>Somando todos os valores, temos ${soma}.</p>`

    resultado.innerHTML+=`<p>A média dos valores digitados é ${soma/select.length}.</p>`
    }    
}