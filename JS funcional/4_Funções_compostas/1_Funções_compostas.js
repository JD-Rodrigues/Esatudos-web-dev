function composer(...fns) {
    return function(valor) {
        return fns.reduce((acc, fn)=>fn(acc), valor)
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

const composição = composer(upper, enphasize, spacer)('para')

console.log(composição)
