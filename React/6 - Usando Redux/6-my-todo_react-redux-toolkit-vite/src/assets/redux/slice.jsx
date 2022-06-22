import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks:[],
    modalDelete:false,
    target:'',
    done:false
}

const slice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        updateTask: (state, {payload})=>{state.tasks=payload},
        setModalDelete: (state)=> {state.modalDelete=!state.modalDelete},
        setTarget: (state, {payload})=>{state.target=payload}
    }

})

export const {updateTask, setModalDelete, setTarget} = slice.actions

export  const reducer = slice.reducer