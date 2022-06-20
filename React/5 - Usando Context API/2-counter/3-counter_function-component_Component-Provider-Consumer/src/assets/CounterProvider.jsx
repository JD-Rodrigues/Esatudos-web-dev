import { createContext, useState } from "react";


const Context = createContext()

function CounterProvider({children}){
    const [state, setState] = useState({ value: 0, msg: ''})
    
    return (
        <Context.Provider value={{state, setState}}>
            {children}
        </Context.Provider>
    )
}

export {Context,CounterProvider}