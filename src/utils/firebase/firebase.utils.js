// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0FpU0ecgNpIhBW2dAATKTq0k1_SUtSLA",
  authDomain: "crown-clothing-db-f65b4.firebaseapp.com",
  projectId: "crown-clothing-db-f65b4",
  storageBucket: "crown-clothing-db-f65b4.appspot.com",
  messagingSenderId: "519659656446",
  appId: "1:519659656446:web:0da732ec297600491a41af",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (authenticatedUser) => {
  const userDocRef = doc(db, "users", authenticatedUser.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const newUser = {
      createdAt: new Date(),
      displayName: authenticatedUser.displayName,
      email: authenticatedUser.email,
    };
    try {
      await setDoc(userDocRef, newUser);
    } catch (error) {
      console.log("Error Creating the User", error);
    }
  }
  return userSnapshot.data();
};
