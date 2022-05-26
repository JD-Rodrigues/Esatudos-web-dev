

const root = document.querySelector('#root')

const t1 = React.createElement("h1", null, "Título da página")
const t2 = React.createElement('h4', {id:'Subtítulo'}, 'Subtítulo da página')

const container = React.createElement('div', null, t1, t2)

ReactDOM.render(container, root)