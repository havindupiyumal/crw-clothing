// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  query,
} from "firebase/firestore";

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
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const signOutAuthUser = async () => await signOut(auth);

export const createUserDocumentFromAuth = async (
  authenticatedUser,
  displayName = null
) => {
  if (!authenticatedUser) return;

  const userDocRef = doc(db, "users", authenticatedUser.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const newUser = {
      createdAt: new Date(),
      displayName:
        displayName == null ? authenticatedUser.displayName : displayName,
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

export const createAuthUserWithEmailAndPassword = async ({
  displayName,
  email,
  password,
}) => {
  if (!email || !password) return;

  const createdAuthUserCredentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  return createdAuthUserCredentials;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  const authenticatedUser = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return authenticatedUser;
};

export const onAuthStateChangeListner = (callback) =>
  onAuthStateChanged(auth, callback);

export const getProductsAndCategories = async () => {
  const q = query(collection(db, "categories"));

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

  // const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
  //   const { title, items } = docSnapshot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});
  //return categoryMap;
};
