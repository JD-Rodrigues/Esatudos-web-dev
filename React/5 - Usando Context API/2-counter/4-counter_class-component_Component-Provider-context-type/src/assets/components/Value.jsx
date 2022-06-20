import { Component, useContext } from "react";
import { Context } from "../CounterProvider";


class Value extends Component {
    static contextType = Context

    render(){
        const {value} = this.context
        return (
            <span>{value}</span>
        )
    }
}

export default Value