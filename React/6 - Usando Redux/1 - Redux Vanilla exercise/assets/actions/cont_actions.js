
const incrementState = value=>{return{type:'INCREMENT', payload:value}} 
const decrementState = value=>{return{type:'DECREMENT', payload: value}}

module.exports = {incrementState, decrementState}