import { useParams } from "react-router-dom";
import CollectionPage from "../collection/collection";
import ShopPage from "../shoppage/shoppage.component";
import { useEffect, useState } from "react";
import { Firestore } from "firebase/firestore";
import { firestore, convertCollections } from "../../firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCollections,
  fetchCollectionStart,
  fetchCollectionAsync,
} from "../../redux/shopSlice";

function ShopCollectionPage() {
  const categoryName = useParams().collectionId; // Ensure the correct parameter name is used here
  // console.log("Collection ID:", categoryName);

  // const collection = useSelector((state) => state.shop.collections);
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const collectionRef = firestore.collection("collections");

  //   const unSubscribeFromSnapshot = collectionRef.onSnapshot(
  //     async (snapshot) => {
  //       const collectionData = convertCollections(snapshot);
  //       dispatch(updateCollections(collectionData));
  //       setIsLoading(false);
  //     }
  //   );
  //   return () => {
  //     unSubscribeFromSnapshot();
  //   };
  // }, []);

  const collection = useSelector((state) => state.shop.collections);
  const isFetching = useSelector((state) => state.shop.isFetching);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchCollectionAsync());
  }, [dispatch]);
  useEffect(() => {
    if (!isFetching && collection) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [isFetching, collection]);

  // useEffect(() => {
  //   dispatch(fetchCollectionStart());
  // });

  return categoryName ? (
    <CollectionPage
      categoryName={categoryName}
      isLoading={isLoading}
      collection={collection}
    />
  ) : (
    <ShopPage isLoading={isLoading} collection={collection} />
  );
}

export default ShopCollectionPage;
