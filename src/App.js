import React, { useEffect, useState } from "react";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shoppage/shoppage.component.jsx";
import SignInAndOutPage from "./pages/sign-in-out-page/sign-in-out.component.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component.jsx";
import { auth } from "./firebase/firebase.utils.js";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => {
      subscribe();
    };
  }, []);

  // console.log(currentUser);
  return (
    <div>
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndOutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
