import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import switchDarkModeReducer from '../features/Switch/switchDarkMode/switchDarkModeSlicer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    switchDarkMode: switchDarkModeReducer
  },
});
