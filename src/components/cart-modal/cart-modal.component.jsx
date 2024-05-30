import "./cart-modal.styles.scss";

import Button from "../button/button.component";
function CartModal() {
  return (
    <div className="cart-modal">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartModal;
