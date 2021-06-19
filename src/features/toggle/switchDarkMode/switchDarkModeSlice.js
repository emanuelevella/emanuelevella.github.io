import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isToggled: false
}

const switchDarkModeSlice = createSlice({
    name: 'switchDarkMode',
    initialState,
    reducers: {
        toggle: (state) => {
            state.isToggled = !state.isToggled
        }
    }

})

export const { toggle } = switchDarkModeSlice.actions;
export const selectIsToggled = (state) => { console.log(state.switchDarkMode);return state.switchDarkMode.isToggled === true }

export default switchDarkModeSlice.reducer;