import "./category.scss";
import CollectionItem from "../collection-item/collection-item.component";

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
