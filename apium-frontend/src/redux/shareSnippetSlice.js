import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shareCodeDetails : {}

}

const shareSnippetSlice = createSlice({
    name : "snippet",
    initialState,
    reducers : {
        setShareCodeDetails(state, action) {
            state.shareCodeDetails = action.payload
        }
    }
})

export const {setShareCodeDetails} = shareSnippetSlice.actions
export default shareSnippetSlice.reducer