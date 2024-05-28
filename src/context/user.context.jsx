import { createContext, useEffect, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

import {
  onAuthStateChangeListner,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

const INITIAL_STATE = {
  currentUser: null,
  setCurrentUser: () => null,
};

export const UserContext = createContext(INITIAL_STATE);

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type User Reducer ${type}`);
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const { currentUser } = state;

  const setCurrentUser = (user) => {
    const action = createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
    dispatch(action);
  };

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
