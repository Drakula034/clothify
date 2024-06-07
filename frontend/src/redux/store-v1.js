import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { auth } from "../firebase/firebase.utils.js"; // Assuming you have imported Firebase
import userReducer from "./userSlice.jsx";
import cartReducer from "./cartSlice.js";

// Custom serializer function for Firebase Timestamp objects
const serialize = (value) => {
  if (value instanceof Date) {
    return value; // No need to serialize if it's already a Date object
  }
  if (auth && auth.Timestamp && value instanceof auth.Timestamp) {
    return value.toDate(); // Convert Timestamp to JavaScript Date
  }
  return value;
};

// Custom middleware to serialize Firebase Timestamp objects
const serializeMiddleware = (store) => (next) => (action) => {
  const { payload } = action;
  if (payload && typeof payload === "object") {
    for (const key in payload) {
      if (auth && auth.Timestamp && payload[key] instanceof auth.Timestamp) {
        payload[key] = payload[key].toDate(); // Convert Timestamp to JavaScript Date
      }
    }
  }
  return next(action);
};

const store = configureStore({
  reducer: { user: userReducer, cart: cartReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        serialize,
      },
    }).concat(logger, serializeMiddleware), // Add the serializeMiddleware to the middleware chain
});

export default store;
