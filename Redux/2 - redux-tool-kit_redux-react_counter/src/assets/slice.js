import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
    msg:''
}

const slice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state, {payload})=> {
            state.value+=1
            state.msg=payload
        },
        decrement:  (state, {payload})=> {
            state.value-=1
            state.msg=payload
        },
        incrementAmount:(state,{payload})=> {state.value+=payload},
    }
})



export const {increment, decrement, incrementAmount} = slice.actions

export default slice.reducer