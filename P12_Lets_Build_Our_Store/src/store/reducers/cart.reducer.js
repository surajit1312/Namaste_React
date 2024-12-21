import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            /**
             * With Redux Toolkit, it allows us to mutate current state which
             * was not allowed in previous versions. 
             * 
             * Previous version used to give an error: You cannot Mutate State.
             * 
             * But Redux Toolkit, the state which is mutated by developers is 
             * actually converted to a immutable/new state using ImmerJS.
             * 
             * (Immer (German for: always) is a tiny package that allows you to 
             * work with immutable state in a more convenient way.)
             */

            // Either mutate state here
            state.items.length = 0;
            // state.items = [];
            // Or return a new state as below:
            // return { items: [] }
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
