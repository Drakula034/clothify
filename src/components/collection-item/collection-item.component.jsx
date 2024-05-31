import React from "react";
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";

import "./collection-item.styles.scss";

function CollectionItem({ item }) {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  function handleAddItem() {
    // window.sessionStorage.setItem("item", JSON.stringify(item));
    dispatch(addItem(item));
  }

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <Button inverted onClick={() => handleAddItem()}>
        Add to Cart
      </Button>
    </div>
  );
}

export default CollectionItem;
