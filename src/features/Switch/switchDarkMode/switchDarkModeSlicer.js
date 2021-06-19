import { createSlice } from '@reduxjs/toolkit';

const localStorageKey = "stonksIsDarkTheme";
const persistedTheme = localStorage.getItem(localStorageKey);

const initialState = {
    isToggled: persistedTheme ? true : false
};

const switchDarkModeSlice = createSlice({
    name: 'switchDarkMode',
    initialState,
    reducers: {
        toggle: (state) => {
            state.isToggled = !state.isToggled
            localStorage.setItem(localStorageKey, state.isToggled);
        }
    }

})

export const { toggle } = switchDarkModeSlice.actions;
export const selectIsToggled = (state) => state.switchDarkMode.isToggled;

export default switchDarkModeSlice.reducer;