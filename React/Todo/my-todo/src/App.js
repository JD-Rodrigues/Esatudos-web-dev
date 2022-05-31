import {useState } from 'react';
import './App.css';
import Task from './assets/components/Task'
import Form from './assets/components/Form'

function App() {
  const [tasks,setTasks] = useState([]) 
 
  return (
    <div className="container">
      <Form tasks={tasks} setTasks={setTasks}/>
      <Task setTasks={setTasks} tasks={tasks}/>
    </div>
  );
}

export default App;


