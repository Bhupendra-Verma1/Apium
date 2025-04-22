import { configureStore } from "@reduxjs/toolkit";
import CodeReducer from './codeSlice'
import AuthReducer from './authSlice'
import SnippetReducer from './shareSnippetSlice'

const store = configureStore({
    reducer : {
        code : CodeReducer,
        auth : AuthReducer,
        snippet : SnippetReducer
    }
})

export default store