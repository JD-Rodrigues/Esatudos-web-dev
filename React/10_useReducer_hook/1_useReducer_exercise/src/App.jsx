
import { useReducer, useState } from 'react'
import './App.css'
import Feed from './components/Feed/Index'
import Form from './components/Form/Index'
import { add, InitialState, reducer } from './Reducer/Index'
import {v4 as randomId} from 'uuid'
import ModalEdit from './components/ModalEdit/Index'



function App() {
  const [editing, setEditing] = useState(false)
  const [people, dispatchPeople] = useReducer(reducer, InitialState)

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [city, setCity] = useState('')

  const [personEdit, setPersonEdit] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    dispatchPeople(add({
      nome: name,
      idade:age, 
      cidade: city,
      id: randomId()
    }))
    
  }


  return (
    
    <div className="App">
      <Form setName={setName} setAge={setAge} setCity={setCity} handleSubmit={handleSubmit}/>
      <Feed setEditing={setEditing} people={people} dispatchPeople={dispatchPeople} setPersonEdit={setPersonEdit} />
      
      {editing && <ModalEdit people={people} dispatchPeople={dispatchPeople} setEditing={setEditing} personEdit={personEdit} />}
    </div>
  )
}

export default App
