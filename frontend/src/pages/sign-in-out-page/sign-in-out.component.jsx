import React from "react";

import "./sign-in-out.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
function SignInAndOutPage() {
  return (
    <div className="sign-in-out-page">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndOutPage;
