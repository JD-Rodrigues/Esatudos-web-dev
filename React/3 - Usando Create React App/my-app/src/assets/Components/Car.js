import React from 'react'




export class Car extends React.Component {
    render(){
    
        return (
            <div>
                <h1 onClick={()=>this.props.setDay({Dia:'segunda', Mês:'fevereiro'})}>Meu carro preferido é o {this.props.name}, de {this.props.year}. Hoje é {this.props.day}</h1>
                
            </div>
        )
    }    
}

