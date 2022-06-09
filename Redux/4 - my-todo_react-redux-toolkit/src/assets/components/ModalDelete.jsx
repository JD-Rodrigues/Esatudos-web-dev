
import { useDispatch, useSelector } from 'react-redux'
import css from '../components_css/ModalDelete.css'
import { updateTasks, setModalDelete } from '../rtk/slice'

export default function  ModalDelete() {
    const tasks = useSelector(state=>state.onlyReducer.tasks)
    const target = useSelector(state=>state.onlyReducer.target)
    const dispatch = useDispatch()

    function removeTask() {
        const updatedTasks = tasks.filter(task=>task.id!=target)
        dispatch(updateTasks(updatedTasks))
    }

    return (
        <div id="modal-delete">
            <p>Gostaria realmente de deletar esta tarefa?</p>
            <div class='buttons-delete'>
                <button onClick={()=>dispatch(setModalDelete(false))}>Não</button>
                <button onClick={()=>{
                    removeTask()
                    dispatch(setModalDelete(false))
                }}>Sim</button>
            </div>
        </div>
    )
}

