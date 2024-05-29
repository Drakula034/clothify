import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyAouYIfzpYlJ4UnE2N08ZUZPJTbPgAMlu8",
  authDomain: "clothify-db-d09f8.firebaseapp.com",
  projectId: "clothify-db-d09f8",
  storageBucket: "clothify-db-d09f8.appspot.com",
  messagingSenderId: "854379205581",
  appId: "1:854379205581:web:72391a6d7a3975dfe42a84",
  measurementId: "G-F82VVSWF71",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
