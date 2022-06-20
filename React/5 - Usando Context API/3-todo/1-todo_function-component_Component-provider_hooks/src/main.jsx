import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TodoContext } from './assets/TodoContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoContext>
      <App />
    </TodoContext>
  </React.StrictMode>
)
