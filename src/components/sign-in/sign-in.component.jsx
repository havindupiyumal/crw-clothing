import { useEffect, useState } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-in.styles.scss";

export const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const user = await createUserDocumentFromAuth(response.user);
    console.log(user);
  };

  return (
    <div className="sign-in-container">
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  );
};
