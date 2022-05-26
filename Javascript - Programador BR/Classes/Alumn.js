
const Person = require('./Person')

class Alumn extends Person {
    constructor(name, age, city) {
        super(name, age)
        this.city = city
    }

    greetings() {
        console.log(`Olá! Eu sou ${this.name}, tenho ${this.age} anos e moro em ${this.city}.`)
    }
}

module.exports = Alumn