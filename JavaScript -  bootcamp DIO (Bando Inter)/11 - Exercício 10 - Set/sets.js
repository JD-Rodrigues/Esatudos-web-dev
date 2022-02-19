
const array = [30, 30, 40, 5, 223, 2049, 3034, 5]

//Tranformação de array em um Set. Isso elimina os elementos duplicados, pois o set é uma estrutura que não permite duplicidade de elementos.
const mySet = new Set(array)


//Copia os elementos do set para um array, utilizando o operador spread. Agora, temos um array de números únicos.
const arrayUnico = [...mySet]

console.log(arrayUnico)

//