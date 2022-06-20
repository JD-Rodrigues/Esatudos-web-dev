import { Context } from "../CounterProvider"


function IncrementButton () {
    
    return(
        <Context.Consumer>
            {(props)=>{
                return (
                    <button 
                        onClick={
                            props.state.value<9?()=>props.setState({value: props.state.value+1, msg:'Continue incrementando'}):()=>props.setState({value: props.state.value+1, msg:'Você conseguiu!'})
                            } 
                            className='increment-btn'
                            >Incremento
                    </button>
                )
            }}
        </Context.Consumer>
    )
}

export default IncrementButton