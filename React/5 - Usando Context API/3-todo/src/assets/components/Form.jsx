import { TaskItem } from "./TaskItem"
import css from '../components_css/Form.css'
import { useContext } from "react"
import { Context } from "../context"

export default function Form() {
  const context = useContext(Context)

  function addTask(e) {
      e.preventDefault()
      const inputTask = document.querySelector('.input').value
      context.setTasks([...context.tasks, new TaskItem(inputTask)])
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