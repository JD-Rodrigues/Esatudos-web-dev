import React, { useContext } from "react";
import Context from "../AuthProvider";

function UserPage(){
    const userContext = useContext(Context)
    
    return (
        <div>
            <p>Olá, {userContext.user.nick}!</p>
            <button onClick = {()=>userContext.setUser({nick:false})}>Sair</button>
        </div>
    )
}

export default UserPage