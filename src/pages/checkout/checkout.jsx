import { useSelector } from "react-redux";
import "./checkout.scss";
import { selectCartTotal } from "../../redux/utils/cart.utils.js";
import CheckoutItem from "../../components/checkout-item/checkout-item.jsx";
function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = selectCartTotal(cartItems);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total: ${total}</span>
      </div>
    </div>
  );
}

export default CheckoutPage;
