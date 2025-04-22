import { Description } from "@headlessui/react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    codeDetails : {
        id : "",
        title : "",
        language : "",
        content : ""
    },
    isRunning : false,
    success : true,
    output : "",
    error : "",
    description : ""
}

const codeSlice = createSlice({
    name : "code",
    initialState,
    reducers : {

        setCodeDetails : (state, action) => {
            state.codeDetails = action.payload
        },

        setSuccess : (state, action) => {
            state.success = action.payload.var
        },

        setRunning : (state, action) => {
            state.isRunning = action.payload.var
        },

        setOutput : (state, action) => {
            state.output = action.payload
        },

        setError : (state, action) => {
            state.error = action.payload
        },
        
        setDescription : (state, action) => {
            state.description = action.payload
        }
    }
})


export const {setCodeDetails, setSuccess, setContent, setLanguage, setRunning, setError, setOutput, setDescription} = codeSlice.actions
export default codeSlice.reducer