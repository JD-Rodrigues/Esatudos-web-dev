import css from '../components_css/Task.css'
import {updateTask, setModalDelete, setTarget} from '../redux/slice'
import { useDispatch, useSelector } from 'react-redux';

export default function Task () {   
    const tasks = useSelector(state=>state.tasks)
    const dispatch = useDispatch() 

    function checkDone(item) {        
        const checkedUncheckeditems = tasks.map((task)=>{
            if (task.id===item.id) {
                task.done = !task.done
            } 
            task.id=task.id
            
            return task
        })
        dispatch(updateTask(checkedUncheckeditems))
                                                              
    }

    return(
        <div>
            {tasks.map((item, index)=>{

                return(
                    <div className='task-div' key={index}>
                        <div onClick={()=>checkDone(item)} className = {item.done === true ? "checked" : ""}id="check"></div>
                        <li>{item.task}</li>
                        <div onClick={(e)=>{
                            dispatch(setModalDelete())
                            dispatch(setTarget(e.target.getAttribute('data-key')))
                    
           
                }}
                        className='remove' 
                        data-key={item.id}>
                        </div>
                    </div>
                )
            })}            
        </div>
    )
}