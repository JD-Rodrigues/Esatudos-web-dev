import { useState } from 'react'
import './App.css'
import Botão from './components/Botão'
import * as C from './components/styledComponents'

function App() {
  
  return (
    <div className="App">
      <p>Olá! Eu sou um componente estilizado!</p>
      <C.Container>
        <Botão />
      </C.Container>
    </div>
  )
}

export default App
