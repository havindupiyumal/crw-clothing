import { createSlice } from "@reduxjs/toolkit";
import { addCartItem, reduceCartItem, removeCartItem } from "./cart.utlis";

const INITIAL_STATE = {
  isDropdownOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems = addCartItem(action.payload, state.cartItems);
    },
    reduceItemFromCart: (state, action) => {
      state.cartItems = reduceCartItem(action.payload, state.cartItems);
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = removeCartItem(action.payload, state.cartItems);
    },
    toggleCartDropdown: (state, action) => {
      state.isDropdownOpen = !state.isDropdownOpen;
    },
  },
});

export const {
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
  toggleCartDropdown,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
