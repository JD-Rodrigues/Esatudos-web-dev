import {useEffect, useState } from 'react';
import './App.css';
import Task from './assets/components/Task'
import Form from './assets/components/Form'

function App() {
  const [tasks,setTasks] = useState([]) 
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
      <Form tasks={tasks} setTasks={setTasks}/>
      <Task setTasks={setTasks} tasks={tasks}/>
    </div>
  );
}

export default App;


