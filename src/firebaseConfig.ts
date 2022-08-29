// Import the functions you need from the SDKs you need
import { FirebaseApp, FirebaseError, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Auth, getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_FRONTEND_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "lof-backend",
  storageBucket: "lof-backend.appspot.com",
  messagingSenderId: "394113362776",
  appId: "1:394113362776:web:bd7ef4d32061cb6b2fd32d",
  measurementId: "G-6L37VGJP7Y"
};

// Initialize Firebase -- connection btw Firebase and this project
const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fire = firebase
export const auth: Auth = getAuth(app)