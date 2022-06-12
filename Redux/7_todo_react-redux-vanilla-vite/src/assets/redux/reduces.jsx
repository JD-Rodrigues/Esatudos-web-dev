import { combineReducers } from "redux"
// const inicialState = {
//     tasks: [],
//     modalDelete: false,
//     target:null
//   }





//====================================================

const inicialState = []



const tasksReducer = (state=inicialState,action)=> {
    switch(action.type) {
        case 'UPDATE_TASKS':
            return state = action.payload
        default:
            return state
    }

}

//====================================================



const modalDeleteReducer = (state=false,action) => {
    switch(action.type) {
        case 'SHOW_HIDE_MODAL':
            return state = action.payload
        default:
            return state
    }
}

//====================================================



const targetReducer = (state = 'p', action) => {
    switch(action.type) {
        case 'SET_TARGET':
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