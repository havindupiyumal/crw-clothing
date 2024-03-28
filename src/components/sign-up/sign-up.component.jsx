import { useState } from "react";

import "./sign-up.styles.scss";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { FormInput } from "../form-input/form-input.component";
import { Button } from "../button/button.component";

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
      const { user } = await createAuthUserWithEmailAndPassword(formFields);
      await createUserDocumentFromAuth(user, formFields.displayName);

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
    <div className="sign-up-container">
      <h1>Don't have an account?</h1>
      <span>Sign up with your email and password</span>
      <form onSubmit={signUpHandler}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          required
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          min={6}
          onChange={handleChange}
          value={password}
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          min={6}
          onChange={handleChange}
          value={confirmPassword}
          required
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
