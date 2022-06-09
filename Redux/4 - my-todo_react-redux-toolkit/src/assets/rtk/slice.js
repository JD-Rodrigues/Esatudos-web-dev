import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks:[{task:'cagar',id:1,done:false}],
    modalDelete: false,
    target: null
}

const slice = createSlice({
    name: 'TodoState',
    initialState,
    reducers: {
        updateTasks: (state, {payload}) => {
            return state = payload
        },
        setModalDelete: (state,{payload}) => {
            state = payload
        },
        setTarget: (state, {payload}) => {
            state = payload
        }
    }
})


export const {updateTasks,setModalDelete,setTarget} = slice.actions

export default slice.reducer