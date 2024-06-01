import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    checkUserSession: (state, action) => {},
    googleSignInStart: (state, action) => {},
    emailSignInStart: (state, action) => {},
    signOutStart: (state, action) => {},
    signUpStart: (state, action) => {},
    signUpSuccess: (state, action) => {},
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    signOutSuccess: (state, action) => {
      state.currentUser = null;
    },
    signInFailed: (state, action) => {
      state.error = action.payload;
    },
    signUpFailed: (state, action) => {
      state.error = action.payload;
    },
    signOutFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  checkUserSession,
  googleSignInStart,
  emailSignInStart,
  signOutStart,
  signUpStart,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  signInFailed,
  signUpFailed,
  signOutFailed,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
