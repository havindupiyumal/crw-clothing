import { useEffect, useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in.styles.scss";

import { FormInput } from "../form-input/form-input.component";
import { Button } from "../button/button.component";

export const SignIn = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formFields;

  const signInHandler = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
    } catch (error) {
      alert("email or password not found!!!");
    }
  };
  const signInWithGoogle = async () => {
    try {
      const response = await signInWithGooglePopup();
      await createUserDocumentFromAuth(response.user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <div>
        <h1>Already have an account?</h1>
        <span>Sign up with your email and password</span>
        <form onSubmit={signInHandler}>
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
          <div className="buttons-container">
            <Button type="submit">Sign In</Button>
            <Button
              type="button"
              onClick={signInWithGoogle}
              buttonType="google"
            >
              Google Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
