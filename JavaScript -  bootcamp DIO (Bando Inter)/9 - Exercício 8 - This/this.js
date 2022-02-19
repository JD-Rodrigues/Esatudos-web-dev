
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

let pessoa1 = {
    nome:'Marcos',
    idade:21
}

let pessoa2 = {
    nome:'Rafaela',
    idade:45
}

//console.log(idadeFutura.call(pessoa2,17))

//console.log(idadeFutura.apply(pessoa2,[17]))

let idadeFutura = calculaIdade.bind(pessoa2,17)

console.log(idadeFutura())