import "./collection.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";
import Category from "../../components/category/category";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchDataForCollection } from "../../redux/shopSlice";

function CollectionPage() {
  const categoryName = useParams().collectionId;
  // console.log("categoryname", categoryName);
  const collections = useSelector((state) =>
    fetchDataForCollection(state, categoryName)
  );

  // console.log(collections);
  const { title, items, id } = collections;
  // console.log(items);
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <Category key={id} items={items} />
    </div>
  );
}

export default CollectionPage;
