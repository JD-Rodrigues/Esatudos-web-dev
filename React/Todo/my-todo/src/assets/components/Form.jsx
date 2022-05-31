

export default function Form(props) {
    function addTask(e) {
        e.preventDefault()
        const inputTask = document.querySelector('.input').value
        if (inputTask) {
          props.setTasks([...props.tasks, inputTask])
          document.querySelector('.input').value = ''
        }    
      }

    return (
      <form>
        <h1 className='title'>To do</h1>     
        <div className='input-div'>
            <input className='input' type='text' ></input>
            <button onClick={addTask}>Add</button>
        </div>
      </form>
    )
  }