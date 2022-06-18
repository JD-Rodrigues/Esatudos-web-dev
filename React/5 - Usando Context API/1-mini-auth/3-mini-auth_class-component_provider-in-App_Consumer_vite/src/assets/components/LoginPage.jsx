import React, { Component } from "react";
import Context from "../AuthProvider";

class LoginPage extends Component {
    

    
    
    render() {
        return (
            <Context.Consumer>
                {(props)=>{
                    return (
                        <div>
                    
                            <p>Login de usuário</p>
                            <button onClick={()=>props.setUser({user:'JD'})}>Entre</button>
                    
                        </div>
                    )
                }}
                
            </Context.Consumer>
        )
    }
    
}

export default LoginPage