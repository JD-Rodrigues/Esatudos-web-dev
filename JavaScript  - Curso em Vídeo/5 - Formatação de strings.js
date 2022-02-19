
// ATRAVÉS DE CONCATENAÇÃO - O texto fica entre aspas (simples ou duplas), enquanto os valores das variáveis ficam fora das aspas, tendo o sinal de "+" unindo as partes:

var nome = 'Mário'
var idade = 29
var cidade = 'Nova Friburgo'

console.log('O funcionário ' + nome + ', que tem ' + idade + ' anos, atualmente mora em ' + cidade + '.')

console.log()
console.log('--------------------------')
console.log()
// ATRAVÉS DE TEMPLATE STRING - Todo o texto fica entre crases, e, dentro delas, os valores das variáveis ficam dentro de placeholders: ${}

var nome = 'Mário'
var idade = 29
var cidade = 'Nova Friburgo'

console.log(`Vivendo em ${cidade}, o funcionário ${nome} atualmente tem ${idade} anos.`)

console.log()
console.log('--------------------------')
console.log()

// Transformando em letras maiúsculas através da função .toUpperCase:

var s = 'O rato roeu a roupa do rei de Roma.'

console.log(s.toUpperCase())

console.log()
console.log('--------------------------')
console.log()

// Transformando em letras minúsculas através da função .toLowerCase:

var s = 'O RATO ROEU A ROUPA DO REI DE ROMA.'

console.log(s.toLowerCase())

// Obtendo o número de caracteres de uma string (incluindo espaços e pontuação) através do atributo .lenght:

var s = 'O rato roeu a roupa do rei de Roma.'

console.log(`A frase tem ${s.length} caracteres.`)

