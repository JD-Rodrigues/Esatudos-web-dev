import TaskItem from './TaskItem'
import css from '../components_css/Form.css'
import { updateTask } from '../redux/slice'
import { useDispatch, useSelector } from "react-redux";

export default function Form() {
  const tasks = useSelector(state=>state.tasks)
  const dispatch = useDispatch()

  function addTask(e) {
      e.preventDefault()
      const inputTask = document.querySelector('.input').value
      dispatch(updateTask([...tasks, new TaskItem(inputTask, tasks.length)]))
      document.querySelector('.input').value = '' 
      
    }

  return (
    <form>
      <h1 className='title'>To do</h1>     
      <div className='input-div'>
          <input className='input' type='text' ></input>
          <button onClick={addTask}>Add</button>
      </div>
    </form>
  )
}