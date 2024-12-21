import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart.reducer';

const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default appStore;
