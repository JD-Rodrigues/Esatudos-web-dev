import { useParams, useSearchParams } from "react-router-dom"

export function User() {

    const [params, setParams]= useSearchParams()
    console.log(params)
    return (
        <h1 className="user">{`Olá, ${params.get(user)} `}</h1>
    )
}