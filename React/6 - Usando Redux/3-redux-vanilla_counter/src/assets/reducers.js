const inicialState = {
    value: 0,
    msg: '' 
}

const countReducer = (state = inicialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state = {value:state.value+=1,
                   msg: action.payload}
        case 'DECREMENT':
            return state = {value:state.value-=1,
                msg: action.payload}
        default:
        return state
    }
}

export default countReducer