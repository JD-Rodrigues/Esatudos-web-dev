import { Component, createContext, useState } from "react";


const Context = createContext()

class CounterProvider extends Component{
    constructor(props){
        super(props)
        this.state = { value: 0, msg: ''}
        this.setValue = (state)=>{this.setState(state)}
      }
    
    render(){
        const {value,msg} = this.state
        const {setValue} = this
        return (
            <Context.Provider value={{value, msg, setValue}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export {Context,CounterProvider}