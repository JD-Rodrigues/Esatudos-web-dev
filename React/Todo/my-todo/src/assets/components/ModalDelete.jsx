
import css from '../components_css/ModalDelete.css'

export default function  ModalDelete(props) {
    return (
        <div id="modal-delete">
            <p>Gostaria realmente de deletar esta tarefa?</p>
            <div class='buttons-delete'>
                <button onClick={()=>props.setModalDelete(false)}>Não</button>
                <button onClick={()=>{
                    props.removeTask()
                    props.setModalDelete(false)
                }}>Sim</button>
            </div>
        </div>
    )
}

