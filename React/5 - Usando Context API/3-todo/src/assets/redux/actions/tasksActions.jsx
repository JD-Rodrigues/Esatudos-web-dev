
const updateTasks = (updatedState)=>{return{type:'UPDATE_TASKS', payload:updatedState}}

const showHideModal = (bool) => {return{type:'SHOW_HIDE_MODAL', payload: bool}}

const setTarget = (target) => {return{type:'SET_TARGET', payload: target}}


export {updateTasks, showHideModal, setTarget}

