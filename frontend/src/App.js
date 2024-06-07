import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shoppage/shoppage.component.jsx";
import SignInAndOutPage from "./pages/sign-in-out-page/sign-in-out.component.jsx";
import Header from "./components/header/header.component.jsx";
import CheckoutPage from "./pages/checkout/checkout.jsx";
import { setCurrentUser } from "./redux/userSlice.jsx";
import CollectionPage from "./pages/collection/collection.jsx";
import { addCollectionsAndItems } from "./firebase/firebase.utils.js";
import ShopCollectionPage from "./pages/ShopCollectionPage/ShopCollectionPage.jsx";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  // const collectionsObject = useSelector((state) => state.shop.collections);
  // const collectionsArray = Object.values(collectionsObject);
  // console.log(collectionsArray);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
        // console.log(currentUser);
      } else {
        dispatch(setCurrentUser(userAuth));
        // addCollectionsAndItems(
        //   "collections",
        //   collectionsArray.map(({ title, items }) => ({ title, items }))
        // );
      }
    });
    return () => {
      subscribe();
    };
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:collectionId" element={<CollectionPage />} />  */}
          {/* <Route path="/shop/*" element={<ShopCollectionPage />} /> */}
          <Route path="/shop" element={<ShopCollectionPage />}>
            {/* {/* This route matches /shop */}
            {/* <Route index element={<ShopPage />} /> */}
            {/* This route matches /shop/:collectionId */}
            <Route path=":collectionId" element={<CollectionPage />} />
          </Route>

          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            exact
            path="/signin"
            element={currentUser ? <Navigate to="/" /> : <SignInAndOutPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
