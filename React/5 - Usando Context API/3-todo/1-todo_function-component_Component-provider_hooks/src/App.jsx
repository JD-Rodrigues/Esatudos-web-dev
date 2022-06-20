// import { useEffect } from 'react';
import './App.css';
import Task from './assets/components/Task'
import Form from './assets/components/Form'
import ModalDelete from './assets/components/ModalDelete';
import { useContext, useEffect } from 'react';
import { Context } from './assets/TodoContext';


function App() {
  const {tasks, setTasks, modalDelete} = useContext(Context)
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
        <Form />
        <Task />
        {modalDelete && <ModalDelete />}
    </div>
  );
}

export default App;


