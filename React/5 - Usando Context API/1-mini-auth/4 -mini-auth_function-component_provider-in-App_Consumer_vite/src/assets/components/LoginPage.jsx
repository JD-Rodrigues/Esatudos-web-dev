import React from "react";
import Context from "../AuthProvider";

function LoginPage() {
    

    
    
    
        return (
            <Context.Consumer>
                {(props)=>{
                    return (
                        <div>
                    
                            <p>Login de usuário</p>
                            <button onClick={()=>props.setUser({nick:'JD'})}>Entre</button>
                    
                        </div>
                    )
                }}
                
            </Context.Consumer>
        )
    
    
}

export default LoginPage