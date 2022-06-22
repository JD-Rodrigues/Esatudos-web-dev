import { useState } from 'react'
import './App.css'
import Botão from './components/Botão'
import * as C from './components/styledComponents'

function App() {
  
  return (
    <div className="App">
      <C.Container>
        <p>Olá! Eu sou um componente estilizado!</p>
        <button className='free'>Clicar</button>
        <input type="checkbox" id='box' />
        <label for='box'>Texto da checkbox</label>      
        <Botão />
      </C.Container>
    </div>
  )
}

export default App
