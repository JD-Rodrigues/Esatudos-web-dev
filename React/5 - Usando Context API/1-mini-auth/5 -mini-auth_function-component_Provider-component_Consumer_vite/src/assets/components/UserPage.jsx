import React from "react";
import Context from "../AuthProvider";

function UserPage(){    
    return (
        <Context.Consumer>
            {(props)=>{
                return (
                    <div>            
                        <p>Olá, {props.user.nick}!</p>
                        <button onClick = {()=>props.setUser({nick:false})}>Sair</button>
                    
                    </div>
                )
            }}
        
        </Context.Consumer>
    )
}

    


export default UserPage