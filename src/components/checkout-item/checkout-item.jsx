import "./checkout-item.scss";
import { MdDelete } from "react-icons/md";
import { clearItemFromCart } from "../../redux/cartSlice.js";
import { useDispatch } from "react-redux";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { addItem } from "../../redux/cartSlice.js";
import { removeItem } from "../../redux/cartSlice.js";

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
      <span className="quantity">
        <div
          className="operation"
          onClick={() => dispatch(removeItem(cartItem))}
        >
          <LuMinus />
        </div>

        <span className="value">{quantity}</span>

        <div className="operation" onClick={() => dispatch(addItem(cartItem))}>
          <GoPlus />
        </div>
      </span>
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
