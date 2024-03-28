import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangeListner,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

const INITIAL_STATE = {
  currentUser: null,
  setCurrentUser: () => null,
};

export const UserContext = createContext(INITIAL_STATE);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(INITIAL_STATE);

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
