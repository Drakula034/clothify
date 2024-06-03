import { createSlice } from "@reduxjs/toolkit";

import SHOP_DATA from "./shop-data.js";

const initialState = {
  collections: SHOP_DATA,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    // fetchDataForCollection(state, action) {
    //   const payload = action.payload;
    //   const data = state.SHOP_DATA.filter(
    //     (collection) => collection.routeName === payload
    //   );
    //   return { ...state, SHOP_DATA: data };
    // },
  },
});

// export const { fetchDataForCollection } = shopSlice.actions;

export const fetchDataForCollection = (state, route) => {
  const getCollections = state.shop.collections; // Assuming 'shop' is the slice name
  // console.log(getCollections);
  // const filteredData = getCollections.filter(
  //   (collection) => collection.routeName === route
  // );
  // const filteredData = getCollections.find(
  //   (collection) => collection.routeName === route
  // );
  // console.log(filteredData[0]);
  // return filteredData[0];
  const filteredData = getCollections[route];
  // console.log(filteredData);
  return filteredData;
};

export default shopSlice.reducer;
