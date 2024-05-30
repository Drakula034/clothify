import { createSlice } from "@reduxjs/toolkit";

import { addItemToCart } from "./utils/cart.utils";

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
  },
});

export const { toggleCartHidden, addItem } = cartSlice.actions;
export default cartSlice.reducer;
