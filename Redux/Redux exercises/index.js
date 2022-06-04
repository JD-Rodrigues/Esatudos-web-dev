const redux = require('redux')

const incrementState = value=>{return{type:'INCREMENT', payload:value}} 
const decrementState = value=>{return{type:'DECREMENT', payload: value}}

function contReducer(state=0, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state
    }
}

// ======================================

const addItem = (value)=>{return{type:'ADD_ITEM', payload:value}}

function itemReducer(state=[], action){
    switch(action.type) {
        case 'ADD_ITEM':
            return [...state,action.payload]
        default:
            return state
    }
}





const allReduces = redux.combineReducers({
    contReducer,
    itemReducer
})

const store = redux.createStore(allReduces)

store.subscribe(()=>console.log(store.getState()))

store.dispatch(incrementState(5))
store.dispatch(incrementState(5))
store.dispatch(incrementState(5))
store.dispatch(incrementState(5))


store.dispatch(addItem('Domingo'))

store.dispatch(addItem('Segunda'))

store.dispatch(addItem('Terça'))