import React, { useEffect, useState } from "react";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shoppage/shoppage.component.jsx";
import SignInAndOutPage from "./pages/sign-in-out-page/sign-in-out.component.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";
import { setCurrentUser } from "./redux/userSlice.jsx";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

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
      }
    });
    return () => {
      subscribe();
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
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
