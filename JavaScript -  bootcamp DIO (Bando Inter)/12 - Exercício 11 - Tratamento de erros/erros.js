
function valid(array, num) {
    try {
        if (!array || !num) {
            throw ReferenceError()
        } else if (typeof array !== "object"||isNaN(num)){
            throw TypeError()
        } else if (array.length !== num) {
            throw RangeError()
        } else {
            console.log(array)
        }       
    } catch (e) {
        if (e instanceof ReferenceError) {
            e.name = 'Erro de referência:'
            console.log(`${e.name} O array ou o número foram passados vazios!`)
        } else if (e instanceof TypeError) {
            console.log(e.name)
            console.log('Ocorreu um erro de tipo! O segundo parâmetro passado não é um número.')
        } else if (e instanceof RangeError) {
            console.log(e.name)
            console.log('O número passado não representa o tamanho do array!')
        } 
    }
}

valid([1,2,3,4,5],5)