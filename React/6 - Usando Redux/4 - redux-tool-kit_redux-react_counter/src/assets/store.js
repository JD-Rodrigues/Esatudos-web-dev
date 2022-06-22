import { configureStore } from '@reduxjs/toolkit'
import onlyReducer from './slice'

export const store = configureStore({
    reducer:{
        onlyReducer
    }
})



