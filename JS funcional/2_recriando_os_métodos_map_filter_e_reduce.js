
// Reproduzindo o método map() - Para testar, descomente os console.log()

//Map
function myMap(arr, cb) {
    let arr2 = []
    for (i in arr) {
        cb(arr, i)!=undefined&&arr2.push(cb(arr,i))
    }
    return arr2
}

//Array onde o map será utilizado
let lista = [1,2,3,4,5]

// Callback passada no map
function call(arr, i){
    return arr[i]*2
}

//Map sendo aplicado ao array inicial e armazenando os resultados novo array
let listaDupla = myMap(lista, call)



//Log
//console.log(listaDupla)

//===============================================//

//Reproduzindo o método filter

function myFilter(arr, cb) {
    let arr2 = []
    for (i in arr) {
        cb(arr, i)!=undefined&&arr2.push(cb(arr,i))
    }
    return arr2
}

//Array onde o map será utilizado
let numbers = [1,2,3,4,5]

// Callback passada no map
function call2(arr, i){
    if (arr[i] % 2 === 1) {
        return arr[i]
    }
}

//Map sendo aplicado ao array inicial e armazenando os resultados novo array
let oddNumbers = myFilter(numbers, call2)

//Log
//console.log(oddNumbers)

//===============================================//

//Reproduzindo o método reduce

function myReduce(arr, cb, initialValue) {
    let arr2 = initialValue
    for (i in arr) {
        arr2 = (cb(arr,i, arr2))
    }
    return arr2
}

//Array onde o map será utilizado
let values = [1,2,3,4,5]

// Callback passada no map
function call3(arr, i, arr2){
    return arr2+arr[i]
}

//Map sendo aplicado ao array inicial e armazenando os resultados novo array
let amount = myReduce(numbers, call3, 0)

//Log
//console.log(amount)
