
// Um dado pode ter seu tipo convertido em outro. Por exemplo, um dado de tipo String pode ter seu tipo convertido para Number.
//Ex. 1:

var n1 = Number('4')
var n2 = Number('5')

console.log(n1+n2)

// Ex. 2:
var n1 = '4'
var n2 = '5'

var num1 = Number(n1) 
var num2 = Number(n2) // A conversão precisa vir antes da operação que utilizará os tipos convertidos.

// Ex. 3:

console.log(num1+num2)

var n1 = '4'
var n2 = '5'



console.log(Number(n1)+Number(n2))
//Obs.: É possível ser mais específico. Para converter em número inteiro, usa-se parseInt. Para converter em números reais (flutuantes), usa-se parseFloat.

// Convertendo Number em String 
// - Exemplo 1:

var n1 = String(4)
var n2 = String(5)

console.log(n1+n2)

//Exemplo 2 - usando num.toString():
var n1 = 4
var n2 = 5

var charactere = n1.toString()
var charactere2 = n2.toString()


console.log(charactere+charactere2)

//Exemplo 2 - usando num.toString() na operação:
var n1 = 4
var n2 = 5

console.log(n1.toString()+n2.toString())

// Dados obtidos através de interação com o usuário no navegador, virão como String.











