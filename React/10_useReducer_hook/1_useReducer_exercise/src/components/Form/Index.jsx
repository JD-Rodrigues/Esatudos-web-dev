import './Form.css'

function Form({setName,setAge,setCity, handleSubmit}) {

    return(
        <form>
            <h2>Cadastre uma nova pessoa:</h2>
            <fieldset>
                <input 
                onChange={(e)=>setName(e.target.value)} 
                type="text" 
                placeholder="Nome:" 
                />
                <input 
                onChange={(e)=>setAge(e.target.value)} 
                type="number" 
                placeholder="Idade:"  
                />
                <input 
                onChange={(e)=>setCity(e.target.value)} 
                type="text" 
                placeholder="Cidade:" 
                />
                <button 
                onClick={(e)=>{
                    handleSubmit(e)
                }}
                >
                    Submeter
                </button>
            </fieldset>
        </form>
    )
}

export default Form