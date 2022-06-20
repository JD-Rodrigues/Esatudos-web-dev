import { useContext } from "react";
import { Context } from "../CounterProvider";


function Msg() {
    const context = useContext(Context)

    return (
        <p>{context.state.msg}</p>
    )
}

export default Msg