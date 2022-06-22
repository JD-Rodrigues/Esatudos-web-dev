// import { useEffect } from 'react';
import './App.css';
import Task from './assets/components/Task'
import Form from './assets/components/Form'
import ModalDelete from './assets/components/ModalDelete';
import { useSelector, useDispatch } from 'react-redux';
import {updateTask} from './assets/redux/slice'
import { useEffect, useLayoutEffect } from 'react';



//Problema a ser resovido: ao atualizar a página, o id dos próximos itens inseridos reiniciam do zero. Possível solução: Tentar resgatar os dados do storage e passar para o state.tasks após o reinicio da página, antes de adicionar um próximo item. Visto que o id é baseado na length das tasks, os próximos seguirão a ordem.

function App() {
  const tasks = useSelector(globalState=>globalState.tasks)
  const modalDelete = useSelector(state=>state.modalDelete)
  const dispatch = useDispatch()
  const UPDATED_TASKS = JSON.parse(localStorage.getItem('UPDATED_ITEMS')) 
   
  
  useEffect(()=>{
    
    if (UPDATED_TASKS)  {
      dispatch(updateTask(UPDATED_TASKS))
    }
  },[])



  useEffect(()=>{
    console.log(tasks)
    localStorage.setItem('UPDATED_ITEMS',JSON.stringify(tasks))
    // tasks.forEach((task, index)=>task.id=index)
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


