
const initialState = false

function authReducer(state=initialState,{type,payload}) {
    switch(type) {
        case 'LOGIN':
            return state=payload;
        case 'LOGOUT':
            return state = false
        default:
            return state
    }
}

export default authReducer