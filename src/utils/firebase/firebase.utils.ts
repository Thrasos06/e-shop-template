// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseError } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import type { User } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_R7TpVv4n2RW9nzeZKGvisEF4QEJJ4tQ",
  authDomain: "e-shop-template-db.firebaseapp.com",
  projectId: "e-shop-template-db",
  storageBucket: "e-shop-template-db.firebasestorage.app",
  messagingSenderId: "1036276618227",
  appId: "1:1036276618227:web:bc8571c8eab6f19085b886",
  measurementId: "G-171Q9JCYJM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    const user = result.user;

    return user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.error(`Firebase error [${error.code}]: ${error.message}`);
    } else {
      console.error("Unexpected error:", error);
    }

    return null;
  }
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: User) => {
  const userDocRef = doc(db, "user", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error(`Firebase error [${error.code}]: ${error.message}`);
      } else if (error instanceof Error) {
        console.error("Error creating user:", error.message);
      } else {
        console.error("Unknown error:", error);
      }
    }

    return userDocRef;
  }
};
