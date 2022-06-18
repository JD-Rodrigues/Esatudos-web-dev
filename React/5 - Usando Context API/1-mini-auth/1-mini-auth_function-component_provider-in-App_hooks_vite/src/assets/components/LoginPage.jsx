import React, { useContext } from "react";
import Context from "../AuthProvider";

function LoginPage() {
    const userContext = useContext(Context)
    
    return (
        <div>
            <p>Login de usuário</p>
            <button onClick={()=>userContext.setUser({nick:'JD'})}>Entre</button>
        </div>
    )
}

export default LoginPage