import { Context } from "../CounterProvider"

function DecrementButton(){
    
    return(
        <Context.Consumer>
            {(props)=>{
                return(
                    <button 
                        onClick={
                        props.state.value<11?()=>props.setState({value: props.state.value-1, msg:'Continue incrementando'}):()=>props.setState({value: props.state.value-1, msg:'Você conseguiu!'})
                        } 
                        className='decrement-btn'
                        >
                            Decremento
                    </button>
                )
            }}
        
        </Context.Consumer>
    )
}

export default DecrementButton