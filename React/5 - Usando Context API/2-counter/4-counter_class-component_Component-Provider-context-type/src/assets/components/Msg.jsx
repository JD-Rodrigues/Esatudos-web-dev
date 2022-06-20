import { Component } from "react";
import { Context } from "../CounterProvider";


class Msg extends Component {
    static contextType = Context

    render(){
        const {msg} = this.context
        return (
            <p>{msg}</p>
        )
    }
}

export default Msg