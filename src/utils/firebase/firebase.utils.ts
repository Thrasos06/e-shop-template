// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseError } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import type { User } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

type AdditionalUserData = {
  displayName?: string;
};
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
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

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalData: AdditionalUserData = {},
) => {
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
        ...additionalData,
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

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return null;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    return userCredential.user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.error(`Firebase error [${error.code}]: ${error.message}`);
    } else {
      console.error("Unexpected error:", error);
    }

    return null;
  }
};
