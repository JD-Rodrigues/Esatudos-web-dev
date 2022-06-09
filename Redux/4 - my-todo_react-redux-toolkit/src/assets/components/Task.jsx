import { useDispatch, useSelector } from 'react-redux'
import css from '../components_css/Task.css'
import { updateTasks, setModalDelete, setTarget } from '../rtk/slice'

export default function Task () {  
    const tasks = useSelector(state=>state.onlyReducer.tasks)
    const dispatch = useDispatch()
    
    function checkDone(item) {        
        const checkedUncheckeditems = tasks.map(task=>{
            if (task.id==item.id) {
                task.done=!task.done
            } 
            task.id=task.id
            return task
        })

        dispatch(updateTasks(checkedUncheckeditems))
                                                              
    }

    return(
        <div>
            {tasks.map((task)=>{
                return(
                    <div className='task-div' key={task.id}>
                        <div onClick={()=>checkDone(task)} className = {task.done == true ? "checked" : ""}id="check"></div>
                        <li>{task.task}</li>
                        <div onClick={(e)=>{
                            dispatch(setModalDelete(true))
                            dispatch(setTarget(e.target.getAttribute('data-key')))
           
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