
// Definindo a quantidade de casas decimais de um número usando .toFixed(n):

var n = 1520

console.log(n.toFixed(2))

// SUBSTITUIR O PONTO POR VÍRGULA, usando .replace('',''). Este é um método de substituição de caracteres em strings. O primeiro parâmetro é o caractere a ser substituído, enquanto o segundo é o que o substituirá.

var n = '1520.00'

var ncv = n.replace('.',',')

console.log(ncv)

// FORMATAR O VALOR EM REAIS

var n = 1200
var valorEmMoeda = n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

console.log()
console.log('Valor formatado em reais:')

console.log(valorEmMoeda)