import { createContext, useState } from "react";

const Context = createContext()

function TodoContext({children}){
    const [tasks, setTasks] = useState([])
    const [target, setTarget] = useState('')
    const [modalDelete, setModalDelete] = useState(false)

    return(
        <Context.Provider value={{tasks, target, modalDelete, setTasks, setModalDelete, setTarget}}>
            {children}
        </Context.Provider>
    )
}

export {Context,TodoContext}