import React, { useContext } from "react";
import { AuthProvider } from "../AuthProvider";

function LoginPage() {
    const context = useContext(AuthProvider)
    return (
        <div>
            <p>Login de usuário</p>
            <button onClick={context.setUser({nick:'JD'})}>Entre</button>
        </div>
    )
}

export default LoginPage