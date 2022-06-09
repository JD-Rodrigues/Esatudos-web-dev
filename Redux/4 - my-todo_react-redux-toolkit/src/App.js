import {useEffect } from 'react';
import './App.css';
import Task from './assets/components/Task'
import Form from './assets/components/Form'
import ModalDelete from './assets/components/ModalDelete';
import { useDispatch, useSelector } from 'react-redux';
import {updateTasks} from './assets/rtk/slice'


function App() {
  const tasks = useSelector(state=>state.onlyReducer.tasks)
  const modalDelete = useSelector(state=>state.onlyReducer.modalDelete)
  const dispatch = useDispatch()
  const UPDATED_TASKS = JSON.parse(localStorage.getItem('UPDATED_ITEMS'))

  useEffect(()=>{
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


