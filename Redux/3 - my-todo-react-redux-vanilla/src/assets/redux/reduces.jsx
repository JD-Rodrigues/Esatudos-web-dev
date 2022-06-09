import { combineReducers } from "redux"
// const inicialState = {
//     tasks: [],
//     modalDelete: false,
//     target:null
//   }





//====================================================

const inicialState = []

const ADD_TASK = 'ADD_TASK'
const UPDATE_TASKS = 'UPDATE_TASKS'

const tasksReducer = (state=inicialState,action)=> {
    switch(action.type) {
        case UPDATE_TASKS:
            return state = action.payload
        default:
            return state
    }

}

//====================================================

const SHOW_HIDE_MODAL = 'SHOW_HIDE_MODAL'

const modalDeleteReducer = (state=false,action) => {
    switch(action.type) {
        case SHOW_HIDE_MODAL:
            return state = action.payload
        default:
            return state
    }
}

//====================================================

const SET_TARGET = 'SET_TARGET' 

const targetReducer = (state = '', action) => {
    switch(action.type) {
        case SET_TARGET:
            return state = action.payload
        default:
            return state
    }
}

//====================================================

const allReducers = combineReducers(
    {
        tasksReducer,
        modalDeleteReducer,
        targetReducer,
    }
)


export default allReducers