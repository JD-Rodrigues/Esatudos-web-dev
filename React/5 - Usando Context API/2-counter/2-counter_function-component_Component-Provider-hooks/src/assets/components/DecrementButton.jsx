import {useContext} from 'react'
import { Context } from '../CounterProvider'



function DecrementButton(){
    const {state, setState} = useContext(Context)
    return(
        <button 
        onClick={
        state.value<11?()=>setState({value: state.value-1, msg:'Continue incrementando'}):()=>setState({value: state.value-1, msg:'Você conseguiu!'})
        } 
        className='decrement-btn'
        >Decremento
        </button>
    )
}

export default DecrementButton