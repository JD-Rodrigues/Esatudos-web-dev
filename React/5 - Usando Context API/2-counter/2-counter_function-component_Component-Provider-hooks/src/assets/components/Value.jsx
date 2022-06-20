import { useContext } from "react";
import { Context } from "../CounterProvider";


function Value() {
    const context = useContext(Context)

    return (
        <span>{context.state.value}</span>
    )
}

export default Value