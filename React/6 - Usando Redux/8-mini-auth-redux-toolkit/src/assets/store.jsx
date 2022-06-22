/* eslint-disable indent */
/* eslint-disable semi */
import { configureStore } from '@reduxjs/toolkit'
import reducer from './slice'

const store = configureStore({
  reducer,
})

export default store
