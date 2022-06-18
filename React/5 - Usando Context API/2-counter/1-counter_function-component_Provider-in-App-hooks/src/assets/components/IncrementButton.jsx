import { useContext } from "react"
import Context from "../context"


function IncrementButton () {
    const {state, setState} = useContext(Context)
    return(
        <button 
          onClick={
            state.value<9?()=>setState({value: state.value+1, msg:'Continue incrementando'}):()=>setState({value: state.value+1, msg:'Você conseguiu!'})
            } 
            className='increment-btn'
            >Incremento
        </button>
    )
}

export default IncrementButton