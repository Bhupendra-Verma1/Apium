import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    codeDetails : {
        title : "",
        language : "",
        content : ""
    },
    isRunning: false,
    output : "",
    error : ""
}

const codeSlice = createSlice({
    name : "code",
    initialState,
    reducers : {

        setCodeDetails : (state, action) => {
            state.codeDetails = action.payload
        },

        setContent : (state, action) => {
            state.codeDetails.content = action.payload
        },

        setLanguage: (state, action) => {
            state.codeDetails.language = action.payload
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


export const {setCodeDetails, setContent, setLanguage, setRunning, setError, setOutput} = codeSlice.actions
export default codeSlice.reducer