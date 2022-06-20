import { Component, createContext, useState } from "react";

const Context = createContext()

class TodoContext extends Component{
    constructor(props) {
        super(props)
        this.state = {
            tasks:[],
            target:'',
            modalDelete: false
        }
        this.setTasks = (tasks) => {
            this.setState({tasks:tasks})
        }
        this.setTarget = (target) => {
            this.setState({target:target})
        }
        this.setModalDelete = (modalDelete) => {
            this.setState({modalDelete:modalDelete})
        }
    }
    render(){
        const {tasks, target, modalDelete} = this.state
        const {setTasks}= this
        const {setTarget}= this
        const {setModalDelete}= this
        
        return(
            <Context.Provider value={{tasks, target, modalDelete, setTasks, setModalDelete, setTarget}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export {Context,TodoContext}