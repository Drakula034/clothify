import "./cart-nav.styles.scss";
import { BiShoppingBag } from "react-icons/bi";

import { toggleCartHidden } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { CntTotalItem } from "../../redux/utils/cart.utils";
import { selectCartItemsCount } from "../../redux/utils/cart.selectors";
import { useMemo } from "react";

function CartNav() {
  const dispatch = useDispatch();
  let items = useSelector((state) => state.cart.cartItems);
  const count = useMemo(() => CntTotalItem(items), [items]);
  // console.log(count);

  return (
    <div className="cart-nav" onClick={() => dispatch(toggleCartHidden())}>
      <BiShoppingBag className="cart-icon" />
      <span className={`${count > 0 ? "filled" : ""} item-count`}>{count}</span>
    </div>
  );
}

export default CartNav;
