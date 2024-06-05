import { createSlice } from "@reduxjs/toolkit";

// import SHOP_DATA from "./shop-data.js";

const initialState = {
  // collections: SHOP_DATA,
  collections: null,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    updateCollections(state, action) {
      return { ...state, collections: action.payload };
    },
  },
});

// export const { fetchDataForCollection } = shopSlice.actions;

export const fetchDataForCollection = (state, route) => {
  const getCollections = state.shop.collections; // Assuming 'shop' is the slice name
  console.log(getCollections);
  // const filteredData = getCollections.filter(
  //   (collection) => collection.routeName === route
  // );
  // const filteredData = getCollections.find(
  //   (collection) => collection.routeName === route
  // );
  // console.log(filteredData[0]);
  // return filteredData[0];
  const filteredData = getCollections ? getCollections[route] : null;
  console.log(filteredData);
  return filteredData;
};

export const { updateCollections } = shopSlice.actions;

export default shopSlice.reducer;
