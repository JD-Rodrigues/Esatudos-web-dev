import React, { Component } from "react";
import Context from "../AuthProvider";

class UserPage extends Component{
    

    
render(){
    
    return (
        <Context.Consumer>
            {(props)=>{
                return (
                    <div>
            
                        <p>Olá, {props.user}!</p>
                        <button onClick = {()=>props.setUser({user:false})}>Sair</button>
                    
                    </div>
                )
            }}
        
        </Context.Consumer>
    )
}

    
}

export default UserPage