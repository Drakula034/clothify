import { createSlice } from "@reduxjs/toolkit";

const initialState = { hidden: true };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartHidden(state) {
      return { ...state, hidden: !state.hidden };
    },
  },
});

export const { toggleCartHidden } = cartSlice.actions;
export default cartSlice.reducer;
