import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pending: {}
}

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        add: (state, { payload }) => {
            if(state.pending[payload.label]) {
                state.pending[payload.label] = {...state.pending[payload.label],  quantity: state.pending[payload.label].quantity + payload.quantity, price: (parseFloat(state.pending[payload.label].price) + parseFloat(payload.price)).toFixed(2)}
            } else {
                state.pending[payload.label] = payload 
            }
        },
        remove: (state, { payload }) => {
            delete state.pending[payload.label]
        },
        edit: (state, { payload }) => {
            state.pending[payload.label] = {...state.pending[payload.label],  quantity: payload.quantity, price: payload.price}
        }
    }

})

export const { add, remove, edit } = ordersSlice.actions;
export const selectPendingOrders = (state) => state.orders.pending

export default ordersSlice.reducer;