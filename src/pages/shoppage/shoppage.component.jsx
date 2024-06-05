import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";
import { useSelector } from "react-redux";
import CollectionsOverview from "../../components/collections-overview/collections-overview.jsx";
import Spinner from "../../components/spinner/spinner.jsx";
function ShopPage({ isLoading, collection }) {
  /* Used as starting data for ShopPage */
  // const collections = useSelector((state) => state.shop.SHOP_DATA);
  if (isLoading) return <Spinner />;
  return (
    <div className="shop-page">
      {/* {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))} */}

      <CollectionsOverview collection={collection} />
    </div>
  );
}

export default ShopPage;
