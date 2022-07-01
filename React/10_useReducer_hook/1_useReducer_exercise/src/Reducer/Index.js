

const InitialState = []

function add(person){
    return {type:'ADD', payload: person}
}

function del(people){
    return {type: 'DEL', payload: people}
}

function updatePerson(data){
    return {type:'UPDATE', payload: data}
}

function reducer (state, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload]
        case 'DEL':
            return action.payload
        case 'UPDATE':
            state.splice(action.payload.index, 1, action.payload.person)
        default:
            return state

    }

}

export {add, del, updatePerson, reducer, InitialState}