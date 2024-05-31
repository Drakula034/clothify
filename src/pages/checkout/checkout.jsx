import { useSelector } from "react-redux";
import "./checkout.scss";
import { selectCartTotal } from "../../redux/utils/cart.utils.js";
import CheckoutItem from "../../components/checkout-item/checkout-item.jsx";
function CheckoutPage() {
  let cartItems = useSelector((state) => state.cart.cartItems);
  const total = selectCartTotal(cartItems);
  // const itemsInLocal = window.sessionStorage.getItem("cart");
  // cartItems = [...cartItems, ...JSON.parse(itemsInLocal)];
  const itemsInLocal = window.sessionStorage.getItem("cart");

  if (itemsInLocal) {
    try {
      const parsedItems = JSON.parse(itemsInLocal);
      cartItems = [...cartItems, ...parsedItems];
    } catch (error) {
      console.error("Error parsing cart items from sessionStorage:", error);
    }
  }

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
