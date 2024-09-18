// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA62SuVPbs2nO4E9npwu9ee23EuJdFxjk",
  authDomain: "clone-29a46.firebaseapp.com",
  projectId: "clone-29a46",
  storageBucket: "clone-29a46.appspot.com",
  messagingSenderId: "280137934912",
  appId: "1:280137934912:web:487a5c53457d18fefdd7a5",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = app.firestore();
