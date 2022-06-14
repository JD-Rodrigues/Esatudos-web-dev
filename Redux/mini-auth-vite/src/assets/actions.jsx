

const login = (user)=> {return {type:'LOGIN', payload:user }}
const logout = {type: 'LOGOUT'}

export {login, logout}