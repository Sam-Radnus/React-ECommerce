import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { cartReducers } from '../Reducers/cartReducers.js';

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage }
};

const store = configureStore({
  reducer: {
    cart: cartReducers,
  },
  middleware: [thunk],
  preloadedState: initialState,
});

export default store;
