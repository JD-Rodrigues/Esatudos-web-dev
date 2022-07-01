import { useEffect, useState } from 'react'
import { updatePerson } from '../../Reducer/Index'
import './ModalEdit.css'

function ModalEdit({personEdit, setEditing, people, dispatchPeople}){

    const [updatedName, setUpdatedName] = useState(personEdit.nome)
    const [updatedAge, setUpdatedAge] = useState(personEdit.idade)
    const [updatedCity, setUpdatedCity] = useState(personEdit.cidade)

    useEffect(
        ()=>{
            document.querySelector('.name-edit').value = personEdit.nome
            document.querySelector('.age-edit').value = personEdit.idade
            document.querySelector('.city-edit').value = personEdit.cidade
        },[]
    )

    function update(e){
        e.preventDefault()
        people.map((person, index)=>{
            if( person.id === personEdit.id ) {
                const updatedPerson = person
                updatedPerson.nome = updatedName
                updatedPerson.idade = updatedAge
                updatedPerson.cidade = updatedCity
                console.log(updatedPerson)
                dispatchPeople(updatePerson({ index:index, person:updatedPerson }))
                setEditing(false)

            }

        })
        
    }

    return(
        <div className="modal-edit">
            
            <form>
                <div onClick={()=>setEditing(false)} className='close-edit'>Fechar</div>
                <input onChange={(e)=>setUpdatedName(e.target.value)} className='name-edit'  type="text"  />
                <input onChange={(e)=>setUpdatedAge(e.target.value)} className='age-edit'  type="number"  />
                <input onChange={(e)=>setUpdatedCity(e.target.value)} className='city-edit'  type="text"  />
                <button onClick={update}>Atualizar</button>
            </form>
        </div>
    )
}

export default ModalEdit