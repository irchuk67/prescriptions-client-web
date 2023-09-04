import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}
const registerFormSlice = createSlice({
    name: 'registerForm',
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

export default registerFormSlice.reducer;
export const {open, close} = registerFormSlice.actions;