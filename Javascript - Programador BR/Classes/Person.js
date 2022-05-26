


class Person{
    constructor (name, age){
        this.name=name
        this.age=age
    }

    greetings(){
        console.log(`Olá! Eu sou ${this.name} e tenho ${this.age} anos.`)
    }
}

module.exports = Person