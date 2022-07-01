import { del } from '../../Reducer/Index'
import Person from '../Person/Index'
import './Feed.css'

function Feed({people, dispatchPeople, setEditing, setPersonEdit }){

  function handleDelete(e){
    const updatedPeople = people.filter(person=>person.id != e.target.getAttribute('datakey'))
    dispatchPeople(del(updatedPeople))
    
  }   

  function handleEdit(person){
    setEditing(true)
    setPersonEdit(person) 
  }

  return (
      <div className='feed'>
        {people.map((person, index)=>{
          return (
            <div key={index} className="person">
              <Person  name={person.nome} age={person.idade} city={person.cidade} />
              <div className="icons">
                <div 
                  datakey={person.id} 
                  onClick={handleDelete} 
                  className="x-delete"
                >
                </div>
                <div 
                  onClick={()=>handleEdit(person)} 
                  className="edit"
                  
                >                    
                </div>
              </div>
              <hr></hr>
            </div>
          )
        })}
      </div>
    ) 
}

export default Feed