import "./cart-nav.styles.scss";
import { BiShoppingBag } from "react-icons/bi";

import { toggleCartHidden } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

function CartNav() {
  const dispatch = useDispatch();

  let count = 0;
  return (
    <div className="cart-nav" onClick={() => dispatch(toggleCartHidden())}>
      <BiShoppingBag className="cart-icon" />
      <span className={`${count > 0 ? "filled" : ""} item-count`}>{count}</span>
    </div>
  );
}

export default CartNav;
