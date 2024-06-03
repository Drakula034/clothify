import { useSelector } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collections-overview.scss";

function CollectionsOverview() {
  const collection = useSelector((state) => state.shop.collections);
  const collectionsArray = Object.values(collection);
  return (
    <div className="collections-overview">
      {collectionsArray.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default CollectionsOverview;
