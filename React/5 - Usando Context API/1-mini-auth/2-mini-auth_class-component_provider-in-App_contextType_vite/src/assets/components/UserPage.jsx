import React, { Component } from "react";
import Context from "../AuthProvider";

class UserPage extends Component{
    static contextType = Context

    
    render(){
        const {user,setUser} = this.context
        return (
            <div>
                <p>Olá, {user}!</p>
                <button onClick = {()=>setUser({user:false})}>Sair</button>
            </div>
        )
    }

    
}

export default UserPage