import {useEffect, useState } from 'react';
import './App.css';
import Task from './assets/components/Task'
import Form from './assets/components/Form'
import ModalDelete from './assets/components/ModalDelete';

function App() {
  const [tasks,setTasks] = useState([]) 
  const [modalDelete, setModalDelete] = useState(false)
  const [target, setTarget] = useState(null)
  const UPDATED_TASKS = JSON.parse(localStorage.getItem('UPDATED_ITEMS'))
  
  function removeTask() {
    const updatedTasks = tasks.filter(task=>task.id!=target)
    setTasks(updatedTasks)
  }

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
      <Form tasks={tasks} setTasks={setTasks}/>
      <Task setTarget = {setTarget} setModalDelete={setModalDelete} setTasks={setTasks} tasks={tasks}/>
      {modalDelete && <ModalDelete removeTask={removeTask} setModalDelete = {setModalDelete}/>}
    </div>
  );
}

export default App;


