import React, { Component } from "react";
import Context from "../AuthProvider";

class LoginPage extends Component {
    static contextType = Context    
    
    render() {
        const {setUser} = this.context
        return (
            <div>
                <p>Login de usuário</p>
                <button onClick={()=>setUser({user:'JD'})}>Entre</button>
            </div>
        )
    }
    
}

export default LoginPage