import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import userActionTypes from "./user.types";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
} from "./user.actions";

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapShot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (e) {
    yield put(signInFailure(e.message));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (e) {
    yield put(signInFailure(e.message));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (e) {
    yield put(signOutFailure());
  }
}
export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSiginInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignout() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}
export function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSiginInStart),
    call(onCheckUserSession),
    call(onSignout),
  ]);
}
