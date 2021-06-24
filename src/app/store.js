import { configureStore } from '@reduxjs/toolkit';
import switchDarkModeReducer from '../features/toggle/switchDarkMode/switchDarkModeSlice'
import ordersReducer from '../pages/order/ordersSlice'

export const store = configureStore({
  reducer: {
    switchDarkMode: switchDarkModeReducer,
    orders: ordersReducer
  },
});
