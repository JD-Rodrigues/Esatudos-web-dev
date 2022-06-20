import { TaskItem } from "./TaskItem"
import css from '../components_css/Form.css'
import { Component, useContext } from "react"
import { Context } from "../TodoContext"
import { render } from "react-dom"


class Form extends Component {
  constructor(props) {
    super(props)
    this.addTask = (e) => {
      e.preventDefault()
      const inputTask = document.querySelector('.input').value
      this.context.setTasks([...this.context.tasks, new TaskItem(inputTask)])
      document.querySelector('.input').value = '' 
    }
  }

  static contextType = Context


  render(){
    return (
      <form>
        <h1 className='title'>To do</h1>     
        <div className='input-div'>
            <input className='input' type='text' ></input>
            <button onClick={this.addTask}>Add</button>
        </div>
      </form>
    )
  }
}

export default Form