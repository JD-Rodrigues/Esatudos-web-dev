import { useSearchParams } from "react-router-dom"

export function User() {

    const [searchParams, setSearchParams] = useSearchParams()
    
    function handleParams(){
        searchParams.set('nome','Rodrigues')
        searchParams.set('idade', 21)
        setSearchParams(searchParams)
    }

    return (
        <>
         <h1 className="user">{`Olá, ${searchParams.get('nome')}! Você tem ${searchParams.get('idade')} anos.`}</h1>
         <button onClick={handleParams}>changer</button>
        </>
        
    )
}