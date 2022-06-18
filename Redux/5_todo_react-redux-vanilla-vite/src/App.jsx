// import { useEffect } from 'react';
import './App.css';
import Task from './assets/components/Task'
import Form from './assets/components/Form'
import ModalDelete from './assets/components/ModalDelete';
import { useSelector, useDispatch } from 'react-redux';
import {updateTasks} from './assets/redux/actions/tasksActions'
import { useEffect } from 'react';




function App() {
  const tasks = useSelector(globalState=>globalState.tasksReducer)
  const modalDelete = useSelector(state=>state.modalDeleteReducer)
  const dispatch = useDispatch()
  const UPDATED_TASKS = JSON.parse(localStorage.getItem('UPDATED_ITEMS')) 
   
  
  useEffect(()=>{
    console.log(tasks)
    
    if (UPDATED_TASKS)  {
      dispatch(updateTasks(UPDATED_TASKS))
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


