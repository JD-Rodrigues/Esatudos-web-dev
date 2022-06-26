import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Login } from "./Login"

export function Auth({children}) {
    const logged = true
    

    return(
        <>
            {logged ? children : <Login />}
        </>
    )
}