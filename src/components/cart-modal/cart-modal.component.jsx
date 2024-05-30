import "./cart-modal.styles.scss";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item";
import { useSelector } from "react-redux";
import { useMemo } from "react";
function CartModal() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const memoizedCartItems = useMemo(
    () =>
      cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      )),
    [cartItems]
  );

  return (
    <div className="cart-modal">
      {/* <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div> */}
      <div className="cart-items">{memoizedCartItems}</div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartModal;
