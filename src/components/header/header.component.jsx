import React from "react";

import "./header.styles.scss";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/clothify.svg";
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";

function Header() {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div className="header">
      <NavLink to="/" className="logo-container">
        <Logo className="logo" style={{ height: "70px", width: "70px" }} />
      </NavLink>
      <div className="options">
        <NavLink className="option" to="/shop">
          SHOP
        </NavLink>
        <NavLink className="option" to="/shop">
          CONTACT
        </NavLink>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <NavLink className="option" to="/signin">
            Sign In
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
