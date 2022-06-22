import style from './style.module.css'
import {useState} from 'react'

export default function Botão() {
    const [clicked, setClicked]= useState(false)
    return (
        <button onClick={()=>setClicked(!clicked)} className={clicked===true?style.btn2:style.btn}>Clique aqui</button>
    )
}

