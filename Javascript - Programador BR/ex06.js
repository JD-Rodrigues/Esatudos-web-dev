// Escreva uma função que receba um objeto e imprima suas propriedades

function prop(obj) {
    return Object.keys(obj)
} 

console.log(prop({dia:'quarta',mês:'janeiro'}))