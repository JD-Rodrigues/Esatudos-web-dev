import { Component, useContext } from "react"
import { Context } from "../CounterProvider"



class IncrementButton extends Component {
    
    static contextType = Context

    render(){
        const {value,setValue} = this.context
        return(
            <button 
              onClick={
                value<9?()=>setValue({value: value+1, msg:'Continue incrementando'}):()=>setValue({value: value+1, msg:'Você conseguiu!'})
                } 
                className='increment-btn'
                >Incremento
            </button>
        )
    }
}

export default IncrementButton