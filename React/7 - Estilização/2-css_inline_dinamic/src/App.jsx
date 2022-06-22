import { useState } from 'react'
import './App.css'
import BotãoProp from './components/BotãoProp'
import BotãoState from './components/BotãoState'

function App() {
  
  return (
    <div className="App">
     <BotãoProp fontSize='30px' bgColor='pink'/>
     <BotãoState />
    </div>
  )
}

export default App
