import "./category.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Category({ items }) {
  return (
    <div className="category-page">
      {items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Category;
