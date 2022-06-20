
import css from '../components_css/ModalDelete.css'
import { Component, useContext } from "react"
import { Context } from '../TodoContext'


class ModalDelete extends Component {
    constructor(props) {
        super(props)
        this.removeTask = () => {
            const updatedTasks = this.context.tasks.filter(task=>task.id!=this.context.target)
            this.context.setTasks(updatedTasks)
        }
        
    }

    static contextType = Context

    
    
    render(){
        return (
            <div id="modal-delete">
                <p>Gostaria realmente de deletar esta tarefa?</p>
                <div className='buttons-delete'>
                    <button onClick={()=>this.context.setModalDelete(false)}>Não</button>
                    <button onClick={()=>{
                        this.removeTask()
                        this.context.setModalDelete(false)
                    }}>Sim</button>
                </div>
            </div>
        )
    }
}

export default ModalDelete

