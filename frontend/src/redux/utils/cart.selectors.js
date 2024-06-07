import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector([selectCartItems], (cart) =>
  cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
