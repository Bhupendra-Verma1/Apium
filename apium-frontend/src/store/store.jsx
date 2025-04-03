import { configureStore } from "@reduxjs/toolkit";
import CodeReducer from './codeSlice'

const store = configureStore({
    reducer : {
        code : CodeReducer
    }
})

export default store