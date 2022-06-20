// import { useEffect } from 'react';
import './App.css';
import Task from './assets/components/Task'
import Form from './assets/components/Form'
import ModalDelete from './assets/components/ModalDelete';
import { Component } from 'react';
import { Context } from './assets/TodoContext';

class App extends Component {
  constructor(props) {
    super(props)
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
    this.UPDATED_TASKS = JSON.parse(localStorage.getItem('UPDATED_ITEMS'))    
  }
  static contextType = Context  
  
  componentDidMount(){
    if (this.UPDATED_TASKS)  {
      this.context.setTasks(this.UPDATED_TASKS)
    }
  }

  componentDidUpdate() {
    localStorage.setItem("UPDATED_ITEMS", JSON.stringify(this.context.tasks))
  }
 
  render(){
    return (
      <div className="container">    
          <Form />
          <Task />
          {this.context.modalDelete && <ModalDelete />}
      </div>
    );
  }
}

export default App;


