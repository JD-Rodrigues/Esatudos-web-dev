import css from '../components_css/Task.css'
import { Component, useContext } from "react"
import { Context } from '../TodoContext'


class Task extends Component {   
    constructor(props) {
        super(props)
        this.checkDone = (item) => {        
            const checkedUncheckeditems = this.context.tasks.map(task=>{
                if (task.id==item.id) {
                    task.done=!task.done
                } 
                task.id=task.id
                return task
            })
            this.context.setTasks(checkedUncheckeditems)
                                                                  
        }
    }

    static contextType = Context

    

    render() {
        return(
            <div>
                {this.context.tasks.map((task, index)=>{
                    return(
                        <div className='task-div' key={index}>
                            <div onClick={()=>this.checkDone(task)} className = {task.done == true ? "checked" : ""}id="check"></div>
                            <li>{task.task}</li>
                            <div onClick={(e)=>{
                                this.context.setModalDelete(true)
                                this.context.setTarget(e.target.getAttribute('data-key'))
                                }}
                            className='remove' 
                            data-key={task.id}>
                            </div>
                        </div>
                    )
                })}            
            </div>
        )
    }
}

export default Task