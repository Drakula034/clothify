import React from "react";

import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

function CollectionPreview({ title, items }) {
  //   const { items } = collection;
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} overviewType="name" />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
