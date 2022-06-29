import { useState } from 'react'
import { api } from '../api'
import './Form.css'

function Form(){
    
    const [title, setTitle] = useState()
    const [bodyPost, setBodyPost] = useState()

    function handleTitle() {
        setTitle(document.querySelector('.title').value)
    }

    function handleBodyPost(){
        setBodyPost(document.querySelector('.body-text').value)
    }

    async function post(e){
        e.preventDefault()
        if (title && bodyPost) {
            api.makePost(title, bodyPost)           
        }
        
        
    }

    return(
        <form> 
            <h4>Novo post</h4>
            <input className='title' onChange={handleTitle} type='text' placeholder='Insira um título para o post.' />
            <textarea className='body-text' onChange={handleBodyPost} placeholder="Escreva o conteúdo de seu post." rows={10}/>
            <button onClick={post}>Postar</button>
        </form>
    )
}

export default Form