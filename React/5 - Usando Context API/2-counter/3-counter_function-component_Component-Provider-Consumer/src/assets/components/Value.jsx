import { Context } from "../CounterProvider"


function Value() {    

    return (
        <Context.Consumer>
            {(props)=>{
                return(
                    <p>{props.state.value}</p>
                )
            }}
        </Context.Consumer>
    )
}

export default Value