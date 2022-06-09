import css from '../components_css/Task.css'
import {updateTasks, showHideModal, setTarget} from '../redux/actions/tasksActions'
import { useDispatch, useSelector } from 'react-redux';

export default function Task () {   
    const tasks = useSelector(state=>state.tasksReducer)
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
                            dispatch(showHideModal(true))
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