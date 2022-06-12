
import { useDispatch, useSelector } from 'react-redux'
import css from '../components_css/ModalDelete.css'
import { updateTask, setModalDelete } from '../redux/slice'

export default function  ModalDelete() {
    const tasks = useSelector(state=>state.tasks)
    const target = useSelector(state=>state.target)
    const dispatch = useDispatch()

    function removeTask() {
        const updatedTasks = tasks.filter((task)=>task.id!=target)
        dispatch(updateTask(updatedTasks))
    }
    return (
        <div id="modal-delete">
            <p>Gostaria realmente de deletar esta tarefa?</p>
            <div className='buttons-delete'>
                <button onClick={()=>dispatch(setModalDelete())}>Não</button>
                <button onClick={()=>{
                    removeTask()
                    dispatch(setModalDelete())
                }}>Sim</button>
            </div>
        </div>
    )
}

