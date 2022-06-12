
import { useDispatch, useSelector } from 'react-redux'
import css from '../components_css/ModalDelete.css'
import { updateTasks, showHideModal } from '../redux/actions/tasksActions'

export default function  ModalDelete() {
    const tasks = useSelector(state=>state.tasksReducer)
    const target = useSelector(state=>state.targetReducer)
    const dispatch = useDispatch()

    function removeTask() {
        const updatedTasks = tasks.filter(task=>task.id!=target)
        dispatch(updateTasks(updatedTasks))
    }
    return (
        <div id="modal-delete">
            <p>Gostaria realmente de deletar esta tarefa?</p>
            <div className='buttons-delete'>
                <button onClick={()=>dispatch(showHideModal(false))}>Não</button>
                <button onClick={()=>{
                    removeTask()
                    dispatch(showHideModal(false))
                }}>Sim</button>
            </div>
        </div>
    )
}

