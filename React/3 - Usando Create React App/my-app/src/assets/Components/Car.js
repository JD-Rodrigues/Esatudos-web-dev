import React from 'react'



export class Car extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <h1>Meu carro preferido é o {this.props.name}, de {this.props.year}.</h1>
        )
    }
}

