import React from "react";
import "./button.styles.scss";

function Button({ children, isGoogleSignIn, inverted, ...props }) {
  return (
    <button
      className={`${inverted ? "inverted" : ""}${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
