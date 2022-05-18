Array.prototype.myFilter = function (cb) {
    let arr2 = []
    for (i in this) {
        cb(this[i], i,this)&&arr2.push(this[i])
    }
    return arr2
}








const lista  = [1,2,3,4,5]

const lista2 = lista.myFilter((item)=>item % 2 == 1)

console.log(lista2)