import { createSlice } from "@reduxjs/toolkit";

import { addItemToCart } from "./utils/cart.utils";

import { deleteItemFromCart } from "./utils/cart.utils";

const initialState = { hidden: true, cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartHidden(state) {
      return { ...state, hidden: !state.hidden };
    },
    addItem(state, action) {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    },
    clearItemFromCart(state, action) {
      return {
        ...state,
        cartItems: deleteItemFromCart(state.cartItems, action.payload),
      };
    },
  },
});

export const { toggleCartHidden, addItem, clearItemFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
