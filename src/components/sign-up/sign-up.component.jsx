import { useState } from "react";

import "./sign-up.styles.scss";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

export const SignUp = () => {
  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signUpHandler = async (event) => {
    event.preventDefault();

    if (confirmPassword !== password) {
      alert("Passwords Do not match.");
      return;
    }

    if (password.length < 6) {
      alert("password should be at lease 6 characters!!!");
      return;
    }
    try {
      const userCredentials = await createAuthUserWithEmailAndPassword(
        formFields
      );
      await createUserDocumentFromAuth(
        userCredentials.user,
        formFields.displayName
      );

      setFormFields({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("email already in use.");
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={signUpHandler}>
        <label>Display Name</label>
        <input
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          min={6}
          onChange={handleChange}
          value={password}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          min={6}
          onChange={handleChange}
          value={confirmPassword}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
