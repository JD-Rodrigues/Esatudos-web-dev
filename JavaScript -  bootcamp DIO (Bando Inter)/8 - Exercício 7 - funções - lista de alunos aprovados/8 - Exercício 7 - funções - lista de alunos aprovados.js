

const alunos = [
    {
        nome:'Ricardo',
        nota:8.5
    },

    {
        nome:'Maria',
        nota:7.5
    },

    {
        nome:'Maurício',
        nota:4.2
    },

    {   nome:'Agenor',
        nota: 3.7
    }
]

function calcAprovados(array, media) {
    let aprovados = []

    for (i=0;i<array.length;i++) {
        const {nome, nota} = array[i]
        if (nota>=media) {
            aprovados.push(nome)
        }
    }
    return aprovados
}

console.log(calcAprovados(alunos,5))