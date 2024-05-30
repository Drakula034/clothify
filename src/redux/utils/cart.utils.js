import { useSelector } from "react-redux";
import { selectCartItemsCount } from "./cart.selectors";

export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((item) => item.id === itemToAdd.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

// this is traditional way to call items and cnt
export const CntTotalItem = (cartItems) => {
  // const cartItems = useSelector((state) => state.cart.cartItems);
  let count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return count;
};
