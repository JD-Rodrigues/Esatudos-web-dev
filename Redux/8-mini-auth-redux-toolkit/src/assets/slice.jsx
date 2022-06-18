/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'mini-auth state',
  initialState: { user: false, },
  reducers: {
    login: (state, { payload }) => { state.user = payload },
    logout: (state, { payload }) => { state.user = payload }
  }
})

export const { login, logout } = slice.actions
export default slice.reducer
