import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { useState } from "react";

function SignUp() {
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = user;

  async function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user: authUser } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(authUser, { displayName });
      setUser({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign Up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
}

export default SignUp;
