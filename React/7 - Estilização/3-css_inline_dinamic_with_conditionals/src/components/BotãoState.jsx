import { useState } from "react"


export default function BotãoState() {
    const [clicked, setClicked] = useState(false)

    function clickHandler() {
        setClicked(!clicked)
    }
    
    return (
        <button onClick={clickHandler}  style={{
            width:'200px',
            height:'50px',
            backgroundColor: clicked?'yellow':'blue',
            border:'5px solid grey',
            color:'white',
            fontSize: '20px',
            borderRadius: '5px'
        }}>Clique aqui</button>
    )
}