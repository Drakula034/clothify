import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";
import { useSelector } from "react-redux";
import CollectionsOverview from "../../components/collections-overview/collections-overview.jsx";
function ShopPage() {
  /* Used as starting data for ShopPage */
  // const collections = useSelector((state) => state.shop.SHOP_DATA);
  return (
    <div className="shop-page">
      {/* {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))} */}

      <CollectionsOverview />
    </div>
  );
}

export default ShopPage;
