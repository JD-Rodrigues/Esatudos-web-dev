import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {login} from "../actions";


function LoginPage() {
    const dispatch = useDispatch()
    const context = useSelector(state=>state)

    function loginHandler() {
        dispatch(login('JD')) 
    }

    return (
        <div>
            <p>Login de usuário</p>
            <button onClick={loginHandler}>Entre</button>
        </div>
    )
}

export default LoginPage