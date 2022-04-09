
let alunos = [
    {nome: 'JD',idade:33},
    {nome: 'Zé',idade:52},
    {nome: 'Tereza',idade:75},
    {nome: 'Isis',idade:14}
]

/*function maiorQue40(aluno) {
    return aluno.idade<40
}*/

let acimaDe40 = alunos.filter(aluno=>aluno.idade<40)

console.log(acimaDe40)