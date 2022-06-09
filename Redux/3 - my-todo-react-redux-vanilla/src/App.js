import { useEffect } from 'react';
import './App.css';
import Task from './assets/components/Task'
import Form from './assets/components/Form'
import ModalDelete from './assets/components/ModalDelete';
import { Provider, useDispatch, useSelector } from 'react-redux';
import {updateTasks} from './assets/redux/actions/tasksActions'
import store from './assets/redux/store'

function App() {
  //const tasks = useSelector(globalState=>globalState.tasksReducer.state)
  const modalDelete = useSelector(state=>state.modalDeleteReducer)
  // const dispatch = useDispatch()

  // const UPDATED_TASKS = JSON.parse(localStorage.getItem('UPDATED_ITEMS'))  

  // useEffect(()=>{
  //   if (UPDATED_TASKS)  {
  //     dispatch(updateTasks(UPDATED_TASKS))
  //   }
    
  // },[])

  // useEffect(()=>{
  //   localStorage.setItem('UPDATED_ITEMS',JSON.stringify(tasks))
  // },[tasks])
 
  return (
    <div className="container">
      <Provider store={store}>
        <Form />
        <Task />
        {modalDelete && <ModalDelete />}
      </Provider>
    </div>
  );
}

export default App;


