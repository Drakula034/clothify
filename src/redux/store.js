import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { auth } from "../firebase/firebase.utils.js"; // Assuming you have imported Firebase
import userReducer from "./userSlice.jsx";
import cartReducer from "./cartSlice.js";
import shopReducer from "./shopSlice.js";
import { persistStore } from "redux-persist";
import directoryReducer from "./directorySlice.js";

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

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["user"],
  whitelist: ["cart"],
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        serialize,
      },
    }).concat(logger, serializeMiddleware), // Add the serializeMiddleware to the middleware chain
});

const persistor = persistStore(store);

export { store, persistor };
