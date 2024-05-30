import "./cart-modal.styles.scss";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
function CartModal() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
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
      <div className="cart-items">
        {cartItems.length > 0 ? (
          memoizedCartItems
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
}

export default CartModal;
