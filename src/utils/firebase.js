// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmx5y6sfz6-vYmF7Dfo238w4CrZswysW8",
  authDomain: "netflixgpt-60bb9.firebaseapp.com",
  projectId: "netflixgpt-60bb9",
  storageBucket: "netflixgpt-60bb9.firebasestorage.app",
  messagingSenderId: "714734268506",
  appId: "1:714734268506:web:7dc0206f7ed249d14ae863",
  measurementId: "G-2JXRP88NY1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
