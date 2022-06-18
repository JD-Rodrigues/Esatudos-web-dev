// import { useEffect } from 'react';
import './App.css';
import Task from './assets/components/Task'
import Form from './assets/components/Form'
import ModalDelete from './assets/components/ModalDelete';
import { useEffect, useState } from 'react';
import {Context} from './assets/context'

function App() {
  const [tasks, setTasks] = useState([])
  const [modalDelete, setModalDelete] = useState(false)
  const [target, setTarget] = useState('')

  const UPDATED_TASKS = JSON.parse(localStorage.getItem('UPDATED_ITEMS')) 
   
  
  useEffect(()=>{
    
    if (UPDATED_TASKS)  {
      setTasks(UPDATED_TASKS)
    }
    
  },[])

  useEffect(()=>{
    localStorage.setItem('UPDATED_ITEMS',JSON.stringify(tasks))
  },[tasks])
 
  return (
    <div className="container">
      <Context.Provider value={{tasks, modalDelete, target, setTasks, setModalDelete, setTarget}}>      
        <Form />
        <Task />
        {modalDelete && <ModalDelete />}
      </Context.Provider>
    </div>
  );
}

export default App;


