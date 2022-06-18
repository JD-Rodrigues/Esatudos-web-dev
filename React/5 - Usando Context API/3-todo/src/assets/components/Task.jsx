import css from '../components_css/Task.css'
import { useContext } from "react"
import { Context } from "../context"

export default function Task () {   
    const context = useContext(Context) 

    function checkDone(item) {        
        const checkedUncheckeditems = context.tasks.map(task=>{
            if (task.id==item.id) {
                task.done=!task.done
            } 
            task.id=task.id
            return task
        })
        context.setTasks(checkedUncheckeditems)
                                                              
    }

    return(
        <div>
            {context.tasks.map((task, index)=>{
                return(
                    <div className='task-div' key={index}>
                        <div onClick={()=>checkDone(task)} className = {task.done == true ? "checked" : ""}id="check"></div>
                        <li>{task.task}</li>
                        <div onClick={(e)=>{
                            context.setModalDelete(true)
                            context.setTarget(e.target.getAttribute('data-key'))
                                      
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