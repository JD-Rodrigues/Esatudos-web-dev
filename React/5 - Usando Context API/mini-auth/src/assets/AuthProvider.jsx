import React, { createContext, useState } from "react";

const Context = createContext()

function AuthProvider({children}){
    const [user, setUser] = useState(false)

    return(
        <Context.Provider value={{user, setUser}}>
            {children}
        </Context.Provider>
    )
}

export {Context,AuthProvider}