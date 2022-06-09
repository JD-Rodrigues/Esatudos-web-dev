import { configureStore } from "@reduxjs/toolkit";
import onlyReducer from './slice'

const store = configureStore({
    reducer: {
        onlyReducer
    }
})



export default store
