// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-14bU7MKLO0N2xOfoEcpAeWKxSnsrVeQ",
  authDomain: "wpp-clone-dad6b.firebaseapp.com",
  projectId: "wpp-clone-dad6b",
  storageBucket: "wpp-clone-dad6b.appspot.com",
  messagingSenderId: "693333945848",
  appId: "1:693333945848:web:cc48e4c12651cbe7efba0d",
  measurementId: "G-ZQJDLP5ZJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth with Firebase
export const firebaseAuth = getAuth(app)