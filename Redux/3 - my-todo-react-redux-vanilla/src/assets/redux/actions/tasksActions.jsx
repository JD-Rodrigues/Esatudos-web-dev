
const updateTasks = (updatedState)=>{return{type:'CHECK_UNCHECK_TASK', payload:updatedState}}

const showHideModal = (bool) => {return{type:'SHOW_HIDE_MODA', payload: bool}}

const setTarget = (target) => {return{type:'SET_TARGET', payload: target}}


export {updateTasks, showHideModal, setTarget}

