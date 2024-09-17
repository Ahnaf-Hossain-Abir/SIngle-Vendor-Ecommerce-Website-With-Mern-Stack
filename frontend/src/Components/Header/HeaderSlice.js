import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isOpen: false,
    language: "English"
}

export const headerSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setOpen: (state)=>{
            state.isOpen = !state.isOpen
        },

        setLanguage: (state, action)=>{
            state.language = action.payload
            state.isOpen = false
        }
    }
})

export const {setLanguage, setOpen} = headerSlice.actions

export default headerSlice.reducer