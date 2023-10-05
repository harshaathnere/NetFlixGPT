// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLBRMSh61Qa2CW7DbMzkP_lOlF6xLkerY",
  authDomain: "netflixgpt-dfa6c.firebaseapp.com",
  projectId: "netflixgpt-dfa6c",
  storageBucket: "netflixgpt-dfa6c.appspot.com",
  messagingSenderId: "931416944866",
  appId: "1:931416944866:web:0828407d39c0a8f7b36ebb",
  measurementId: "G-8GRC2SQHF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);