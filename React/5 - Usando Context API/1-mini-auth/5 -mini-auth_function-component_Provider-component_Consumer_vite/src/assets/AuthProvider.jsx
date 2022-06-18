import { createContext, useState } from "react";

const Context = createContext()

export function AuthProvider ({children}) {
    const [user, setUser] = useState({nick:false})

    return (
        <Context.Provider value={{user, setUser}}>
            {children}
        </Context.Provider>
    )
}

export default Context