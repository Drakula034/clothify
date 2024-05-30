import "./checkout-item.scss";
import { MdDelete } from "react-icons/md";

import React from "react";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div className="remove-button">{<MdDelete />}</div>
    </div>
  );
}

export default CheckoutItem;
