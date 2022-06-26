import { useParams } from "react-router-dom"

export function Item() {
    const {slug, id} = useParams()
    
    return (
        <h1>{slug}, {id}</h1>
    )
}