import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// Firebase configuration
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
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAnalytics = getAnalytics(firebaseApp);
logEvent(firebaseAnalytics, "notification_received");

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const MicrosoftProvider = new OAuthProvider("microsoft.com");
const YahooProvider = new OAuthProvider("yahoo.com");

// Create context
const FirebaseContext = createContext(null);

// Firebase Provider Component
export const FirebaseProvider = ({ children }) => {
  const firebaseAuth = getAuth();
  const storage = getStorage();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updatingProfile, setUpdatingProfile] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user || null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [firebaseAuth]);

  const signInWithGooglePopup = () =>
    signInWithPopup(firebaseAuth, googleProvider);
  const signInWithGithubPopup = () =>
    signInWithPopup(firebaseAuth, githubProvider);
  const signInWithTwitterPopup = () =>
    signInWithPopup(firebaseAuth, twitterProvider);
  const signInWithFacebookPopup = () =>
    signInWithPopup(firebaseAuth, facebookProvider);
  const signInWithMicrosoftPopup = () =>
    signInWithPopup(firebaseAuth, MicrosoftProvider);
  const signInWithYahooPopup = () =>
    signInWithPopup(firebaseAuth, YahooProvider);

  const uploadProfileImage = async (file) => {
    const storageRef = ref(storage, `profile_images/${file}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const signUpUserWithEmailAndPasswordWithImage = async (
    email,
    password,
    displayName,
    localImageURL,
  ) => {
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    );

    if (userCredential && userCredential.user) {
      setUpdatingProfile(true);
      const user = userCredential.user;
      await updateProfile(user, { displayName });
      const photoURL = await uploadProfileImage(localImageURL);
      await updateProfile(user, { photoURL });
      console.log("Successfully Signed up!");
      setUpdatingProfile(false);
    } else {
      setError("User credential is undefined");
    }
  };

  const signUpUserWithEmailAndPasswordWithOutImage = async (
    email,
    password,
    displayName,
  ) => {
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    );

    if (userCredential && userCredential.user) {
      setUpdatingProfile(true);
      const user = userCredential.user;
      await updateProfile(user, { displayName });
      console.log("Successfully Signed up!");
      setUpdatingProfile(false);
    } else {
      setError("User credential is undefined");
    }
  };

  const signInAuthUserWithEmailAndPassword = (email, password) => {
    if (!email || !password) return;
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signOutUser = async () => await signOut(firebaseAuth);

  const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(firebaseAuth, callback);

  const isLoggedIn = !!user;

  return (
    <FirebaseContext.Provider
      value={{
        user,
        isLoggedIn,
        loading,
        updatingProfile,
        error,
        signInWithGooglePopup,
        signInWithGithubPopup,
        signInWithTwitterPopup,
        signInWithFacebookPopup,
        signInWithMicrosoftPopup,
        signInWithYahooPopup,
        signUpUserWithEmailAndPasswordWithImage,
        signUpUserWithEmailAndPasswordWithOutImage,
        signInAuthUserWithEmailAndPassword,
        signOutUser,
        onAuthStateChangedListener,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
