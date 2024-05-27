import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { SignInContainer, ButtonContainer } from "./sign-in.styles.jsx";

import { FormInput } from "../form-input/form-input.component";
import { Button, BUTTON_TYPE_CLASSES } from "../button/button.component";

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
      await signInWithGooglePopup();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
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
          <ButtonContainer>
            <Button type="submit">Sign In</Button>
            <Button
              type="button"
              onClick={signInWithGoogle}
              buttonType={BUTTON_TYPE_CLASSES.google}
            >
              Google Sign In
            </Button>
          </ButtonContainer>
        </form>
      </div>
    </SignInContainer>
  );
};
