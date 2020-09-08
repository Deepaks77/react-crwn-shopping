import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAefYJHbqkScug2LsB3EFymg63eqK4QTW0",
  authDomain: "crwn-db-ds.firebaseapp.com",
  databaseURL: "https://crwn-db-ds.firebaseio.com",
  projectId: "crwn-db-ds",
  storageBucket: "crwn-db-ds.appspot.com",
  messagingSenderId: "5223557620",
  appId: "1:5223557620:web:d5c37b7a00bcb6c118f1a1",
  measurementId: "G-F3GPL60PFN",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (e) {
      console.log(e);
    }
  }

  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
