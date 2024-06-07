import { createSlice } from "@reduxjs/toolkit";
import { convertCollections, firestore } from "../firebase/firebase.utils";

// import SHOP_DATA from "./shop-data.js";

const initialState = {
  // collections: SHOP_DATA,
  collections: null,
  isFetching: false,
  errorMessage: "",
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    updateCollections(state, action) {
      return { ...state, collections: action.payload };
    },
    fetchCollectionStart(state) {
      return { ...state, isFetching: true };
    },
    fetchCollectionSuccess(state, action) {
      return { ...state, collections: action.payload, isFetching: false };
    },
    fetchCollectionFailure(state, action) {
      return { ...state, isFetching: false, errorMessage: action.payload };
    },
  },
});

// export const { fetchDataForCollection } = shopSlice.actions;

// export const fetchDataForCollection = (state, route) => {
//   const getCollections = state.shop.collections; // Assuming 'shop' is the slice name
//   console.log(getCollections);
//   // const filteredData = getCollections.filter(
//   //   (collection) => collection.routeName === route
//   // );
//   // const filteredData = getCollections.find(
//   //   (collection) => collection.routeName === route
//   // );
//   // console.log(filteredData[0]);
//   // return filteredData[0];
//   const filteredData = getCollections ? getCollections[route] : null;
//   console.log(filteredData);
//   return filteredData;
// };

export const fetchCollectionAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");

    dispatch(fetchCollectionStart());

    collectionRef
      //  .onSnapshot(
      //   async (snapshot) => {
      //     const collectionData = convertCollections(snapshot);
      //     dispatch(fetchCollectionSuccess(collectionData));
      //   },
      //   (error) => {
      //     dispatch(fetchCollectionFailure(error));
      //   }
      // );
      .get() // Use get method to fetch data once
      .then((snapshot) => {
        const collectionData = convertCollections(snapshot);
        dispatch(fetchCollectionSuccess(collectionData));
      })
      .catch((error) => {
        dispatch(fetchCollectionFailure(error));
      });
  };
};

// export const fetchCollectionSuccess = (collectionData) => { };

export const {
  updateCollections,
  fetchCollectionStart,
  fetchCollectionSuccess,
  fetchCollectionFailure,
} = shopSlice.actions;

export default shopSlice.reducer;
