
let alunos = [
    {nome: 'JD',idade:33},
    {nome: 'Zé',idade:52},
    {nome: 'Tereza',idade:75},
    {nome: 'Isis',idade:14}
]

let somaIdade = alunos.reduce((total, currVal)=>{
    return total+currVal.idade
},0)

console.log(somaIdade)
