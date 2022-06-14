

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



function itemReducer(state=[], action){
    switch(action.type) {
        case 'ADD_ITEM':
            return [...state,action.payload]
        default:
            return state
    }
}

module.exports =  {contReducer, itemReducer}