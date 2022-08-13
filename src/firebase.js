// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRzzKNWOqGNk9jGJH90QL627L4Wz7TwHw",
  authDomain: "chat-app-c8425.firebaseapp.com",
  projectId: "chat-app-c8425",
  storageBucket: "chat-app-c8425.appspot.com",
  messagingSenderId: "283101794452",
  appId: "1:283101794452:web:66898b2dbc4e0cd50d2481",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
