import React from "react";
import "./button.styles.scss";

function Button({ children, isGoogleSignIn, ...props }) {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
