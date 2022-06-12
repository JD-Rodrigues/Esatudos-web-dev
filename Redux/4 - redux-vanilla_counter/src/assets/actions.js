

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const increment = (txt) => {return{type:INCREMENT,payload:txt}}
const decrement = (txt) => {return{type:DECREMENT,payload:txt}}



export {increment,decrement}