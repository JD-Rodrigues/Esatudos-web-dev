
import css from '../components_css/ModalDelete.css'
import { useContext } from "react"
import { Context } from "../context"

export default function  ModalDelete() {
    const context = useContext(Context)

    function removeTask() {
        const updatedTasks = context.tasks.filter(task=>task.id!=context.target)
        context.setTasks(updatedTasks)
    }
    return (
        <div id="modal-delete">
            <p>Gostaria realmente de deletar esta tarefa?</p>
            <div className='buttons-delete'>
                <button onClick={()=>context.setModalDelete(false)}>Não</button>
                <button onClick={()=>{
                    removeTask()
                    context.setModalDelete(false)
                }}>Sim</button>
            </div>
        </div>
    )
}

