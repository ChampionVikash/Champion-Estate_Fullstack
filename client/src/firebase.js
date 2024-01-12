// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4d33b.firebaseapp.com",
  projectId: "mern-estate-4d33b",
  storageBucket: "mern-estate-4d33b.appspot.com",
  messagingSenderId: "131192899926",
  appId: "1:131192899926:web:29817c24fdd5809c73aef7"
 };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);