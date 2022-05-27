const Person = require('./Person')
const Alumn = require('./Alumn')


const pessoa1 = new Person('Maria Miranda', 71)

pessoa1.greetings()

const aluno = new Alumn("Zé", 45, 'São Paulo')

aluno.greetings()


const root = ReactDOM.createRoot(document.querySelector('.root'))

root.render(<Car name='Corsa' year='86'/>)


