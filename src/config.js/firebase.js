/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider}  from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzqV22WnrZz4xMbwvSE6nHHFyyyOuLIjY",
  authDomain: "iotbusra.firebaseapp.com",
  projectId: "iotbusra",
  storageBucket: "iotbusra.appspot.com",
  messagingSenderId: "181330295014",
  appId: "1:181330295014:web:58bce8b85461f52f5ce327",
  measurementId: "G-9XW3Z06PGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider() 


