import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}
const addFormSlice = createSlice({
    name: 'addForm',
    initialState,
    reducers: {
        open: state => {
            state.isOpen = true
        },
        close: state => {
            state.isOpen = false
        }
    }
})

export default addFormSlice.reducer;
export const {open, close} = addFormSlice.actions;