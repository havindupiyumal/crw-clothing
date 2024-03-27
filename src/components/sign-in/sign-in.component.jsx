import { useEffect, useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in.styles.scss";

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
      console.log(error);
    }
  };
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const user = await createUserDocumentFromAuth(response.user);
    console.log(user);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={signInHandler}>
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

          <button type="submit">Sign In</button>
        </form>
      </div>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  );
};
