import css from '../components_css/Task.css'

export default function Task (props) {     
    function checkDone(item) {        
        const checkedUncheckeditems = props.tasks.map(task=>{
            if (task.id==item.id) {
                task.done=!task.done
            } 
            task.id=task.id
            return task
        })
        props.setTasks(checkedUncheckeditems)
                                                              
    }

    return(
        <div>
            {props.tasks.map((task)=>{
                return(
                    <div className='task-div' key={task.id}>
                        <div onClick={()=>checkDone(task)} className = {task.done == true ? "checked" : ""}id="check"></div>
                        <li>{task.task}</li>
                        <div onClick={(e)=>{
                            props.setModalDelete(true)
                            props.setTarget(e.target.getAttribute('data-key'))
           
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