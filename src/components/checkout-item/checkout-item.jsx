import "./checkout-item.scss";
import { MdDelete } from "react-icons/md";
import { clearItemFromCart } from "../../redux/cartSlice.js";
import { useDispatch } from "react-redux";

import React from "react";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        {<MdDelete />}
      </div>
    </div>
  );
}

export default CheckoutItem;
