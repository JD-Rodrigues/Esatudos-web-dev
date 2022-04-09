
let alunos = [
    {nome: 'JD',idade:33},
    {nome: 'Zé',idade:52},
    {nome: 'Tereza',idade:75},
    {nome: 'Isis',idade:14}
]

let em40anos = alunos.map((aluno)=>{
    return `nome:${aluno.nome}, idade:${aluno.idade+40}`
})

console.log(em40anos)
console.log(alunos)

