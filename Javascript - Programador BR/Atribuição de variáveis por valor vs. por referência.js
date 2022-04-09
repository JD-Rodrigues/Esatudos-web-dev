//cópia de valores de tipo não-primitivos, sem referência

//arrays

let números = [1,2,3,4,5,[6,7]]

let algarismos = números.slice()

algarismos[5]=[...números[5]]

algarismos[5][0] = 0

console.log(números)


// objetos

/*let dados = {idade: 33, altura:171, peso:75, pontos:[12, 29, 25]}
let informações = Object.assign({},dados)
informações.pontos={...dados.pontos}
informações.pontos[0] = 45
console.log(dados)*/

//Vtribuindo variáveis de tipo primitivo por referência (transformando em variável composta, que é de tipo não-primitivo)

/*let idade = [1]
let anos = idade

anos[0] = 5

console.log(idade)*/