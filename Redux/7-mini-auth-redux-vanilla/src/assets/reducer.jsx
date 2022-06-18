/* eslint-disable default-param-last */
/* eslint-disable semi */
const initialState = false

function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'LOGIN':
      return payload;
    case 'LOGOUT':
      return false
    default:
      return state
  }
}

export default authReducer
