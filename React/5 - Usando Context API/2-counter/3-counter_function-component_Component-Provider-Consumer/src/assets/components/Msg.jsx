import { Context } from "../CounterProvider"


function Msg() {    

    return (
        <Context.Consumer>
            {(props)=>{
                return(
                    <p>{props.state.msg}</p>
                )
            }}
        </Context.Consumer>
    )
}

export default Msg