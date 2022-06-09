const redux = require('redux')
const {incrementState, decrementState} = require('./assets/actions/cont_actions.js')
const addItem = require('./assets/actions/item_actions.js')
const {contReducer, itemReducer} =  require('./assets/reducers.js')



const allReduces = redux.combineReducers({
    contReducer,
    itemReducer
})

const store = redux.createStore(allReduces)

const {subscribe, getState, dispatch} = store

subscribe(()=>console.log(getState()))

dispatch(incrementState(5))
dispatch(incrementState(5))
dispatch(incrementState(5))
dispatch(incrementState(5))


dispatch(addItem('Segunda'))

dispatch(addItem('Terça'))