
// Reproduzindo o método map()

//Map
function myMap(arr, cb) {
    let arr2 = []
    for (i in arr) {
        cb(arr[i], i,arr)!=undefined&&arr2.push(cb(arr[i], i, arr))
    }
    return arr2
}

//Array onde o map será utilizado
let lista = [1,2,3,4,5]

//Map sendo aplicado ao array inicial e armazenando os resultados novo array
let listaDupla = myMap(lista, (item, indice, array)=>item*10)



//Log
//console.log(listaDupla)

//===============================================//

//Reproduzindo o método filter

function myFilter(arr, cb) {
    let arr2 = []
    for (i in arr) {
        cb(arr[i], i,arr)&&arr2.push(arr[i])
    }
    return arr2
}

//Array onde o filter será utilizado
let numbers = [1,2,3,4,5]

//Map sendo aplicado ao array inicial e armazenando os resultados novo array
let oddNumbers = myFilter(numbers, (currentValue)=>currentValue%2==1)

//Log
//console.log(oddNumbers)

//===============================================//

//Reproduzindo o método reduce

function myReduce(arr, cb, initialValue) {
    let arr2 = initialValue
    for (i in arr) {
        arr2 = (cb(arr2, arr[i], i, arr))
    }
    return arr2
}

//Array onde o map será utilizado
let values = [1,2,3,4,5]

//Map sendo aplicado ao array inicial e armazenando os resultados novo array
let amount = myReduce(numbers, (total, num, _, arr)=>total+num, 0)

//Log
console.log(amount)
