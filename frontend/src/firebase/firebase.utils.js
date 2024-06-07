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

export const addCollectionsAndItems = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    // console.log(newDocRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollections = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  // console.log(transformedCollections);
  return transformedCollections.reduce((accumulate, collection) => {
    accumulate[collection.title.toLowerCase()] = collection;
    return accumulate;
  }, {});
  // console.log("reduecd", reduced);
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
