import React, { useContext } from "react";
import { AuthProvider } from "../AuthProvider";

function UserPage(){
    const context = useContext(AuthProvider)
    return (
        <div>
            <p>Olá, {context.user.nick}!</p>
            <button onClick = {context.setUser(false)}>Sair</button>
        </div>
    )
}

export default UserPage