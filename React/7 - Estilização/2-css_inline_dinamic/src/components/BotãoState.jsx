import { useState } from "react"


export default function BotãoState() {
    const [clicked, setClicked] = useState('gold')

    function clickHandler() {
        setClicked('brown')
    }
    
    return (
        <button onClick={clickHandler}  style={{
            width:'200px',
            height:'50px',
            backgroundColor: clicked,
            border:'5px solid grey',
            color:'white',
            fontSize: '20px',
            borderRadius: '5px'
        }}>Clique aqui</button>
    )
}