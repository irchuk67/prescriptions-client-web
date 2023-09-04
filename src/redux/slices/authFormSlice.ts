import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}
const authFormSlice = createSlice({
    name: 'authForm',
    initialState,
    reducers: {
        open: state => {
            state.isOpen = true;
        },
        close: state => {
            state.isOpen = false
        }
    }
})

export default authFormSlice.reducer;
export const {open, close} = authFormSlice.actions;