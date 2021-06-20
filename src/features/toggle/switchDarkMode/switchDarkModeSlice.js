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
export const selectIsToggled = (state) => state.switchDarkMode.isToggled

export default switchDarkModeSlice.reducer;