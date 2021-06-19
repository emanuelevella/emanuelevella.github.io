import { configureStore } from '@reduxjs/toolkit';
import switchDarkModeReducer from '../features/toggle/switchDarkMode/switchDarkModeSlice'

export const store = configureStore({
  reducer: {
    switchDarkMode: switchDarkModeReducer
  },
});
