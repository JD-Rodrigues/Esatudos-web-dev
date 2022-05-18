Array.prototype.myMap = function(cb) {
    let arr2 = []
    for (let i=0;i<this.length;i++) {
        arr2.push(cb(this[i], i, this))
    }
    return arr2
}










const lista  = [1,2,3,4,5]

const lista2 = lista.myMap((item)=>item*2)

console.log(lista2)