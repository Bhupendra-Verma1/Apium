import { createSlice } from "@reduxjs/toolkit";
import { Languages } from "lucide-react";
import { act } from "react";
import { createSessionStorage } from "react-router-dom";

const initialState = {
    language : "",
    content : "",
    isRunning: false,
    output : "",
    error : ""
}

const codeSlice = createSlice({
    name : "code",
    initialState,
    reducers : {
        setLanguage : (state, action) => {
            state.language = action.payload
        },

        setContent : (state, action) => {
            state.content = action.payload
        },

        setRunning : (state, action) => {
            state.isRunning = action.payload
        },

        setOutput : (state, action) => {
            state.output = action.payload
        },

        setError : (state, action) => {
            state.error = action.payload
        }
    }
})


export const {setLanguage, setContent, setRunning, setError, setOutput} = codeSlice.actions
export default codeSlice.reducer