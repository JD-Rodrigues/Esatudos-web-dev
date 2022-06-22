import { useState } from "react"


export default function BotãoProp(props) {
    return (
        <button  style={{
            width:'200px',
            height:'50px',
            backgroundColor: props.bgColor||'black',
            border:'5px solid yellow',
            color:'white',
            fontSize: props.fontSize,
            borderRadius: '5px'
        }}>Clique aqui</button>
    )
    
}

