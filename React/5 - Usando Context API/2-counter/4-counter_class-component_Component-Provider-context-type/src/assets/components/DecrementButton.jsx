import {Component} from 'react'
import { Context } from '../CounterProvider'


class DecrementButton extends Component{
    
    static contextType = Context
    
    
    render(){
        const {value, setValue} = this.context
        return(
            <button 
            onClick={
                value<11?()=>setValue({value: value-1, msg:'Continue incrementando'}):()=>setValue({value: value-1, msg:'Você conseguiu!'})
            } 
            className='decrement-btn'
            >
                Decremento
            </button>
        )
    }
}

export default DecrementButton