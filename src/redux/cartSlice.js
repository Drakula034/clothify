import { createSlice } from "@reduxjs/toolkit";

import { addItemToCart } from "./utils/cart.utils";

import { deleteItemFromCart } from "./utils/cart.utils";
import { removeItemFromCart } from "./utils/cart.utils";

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
    removeItem(state, action) {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    },
  },
});

export const { toggleCartHidden, addItem, clearItemFromCart, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
