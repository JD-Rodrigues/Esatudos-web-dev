Array.prototype.myReduce = function (cb, ini) {
    let arr2 = ini
    for (let i = 0; i<this.length; i++) {
        arr = cb(arr2, this[i], i, this)
    }

    //com "for in" não funciona, mas ainda não sei o motivo.

    return arr2
    
}

let lista = [1,2,3,4,5]

let lista2 = lista.myReduce((totalValue, currentValue)=>totalValue+currentValue, 0)

console.log(lista2)


