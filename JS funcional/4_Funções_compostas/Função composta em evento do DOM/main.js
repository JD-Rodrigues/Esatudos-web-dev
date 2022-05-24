onload = function() {
    document.querySelector('button').addEventListener('click', tripleEvent)
} //Adiciona um listener de click que chama uma função. Esta função chama uma função composta, que recebe outras 3 e um valor em string como argumentos e insere o valor processado por cada uma delas na tag <p> do doc html.
const text = 'Texto com efeitos dos eventos'

function styler(...fns) {
    return function(valor) {
        return fns.reduce((acc, fn)=>fn(acc),valor)
    }
}

function upper(valor) {
    return valor.toUpperCase()
}

function enphasize(valor) {
    return `${valor}!!!`
}

function spacer(valor) {
    return valor.split('').join(' ')
}

function tripleEvent() {
    document.querySelector('p').append(styler(upper, enphasize, spacer)(text))
}

console.log(styler(upper, enphasize, spacer)(text))