import { all, call, takeLatest, put } from "redux-saga/effects";
import {
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
} from "./user.reducer";

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutAuthUser,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      displayName,
      email,
      password
    );
    yield put(signUpSuccess(user, displayName));
  } catch (error) {
    console.log(error);
    yield put(signUpFailed(error));
  }
}

export function* signOut() {
  try {
    yield call(signOutAuthUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* onGoogleSignInStart() {
  yield takeLatest(googleSignInStart, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(checkUserSession, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield takeLatest(emailSignInStart, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(signUpStart, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(signUpSuccess, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest(signOutStart, signOut);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
