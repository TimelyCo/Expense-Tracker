// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANnMMekBYfKxR7FTYrHj31q02XZl_Uzr8",
  authDomain: "expense-tracker-acbb1.firebaseapp.com",
  projectId: "expense-tracker-acbb1",
  storageBucket: "expense-tracker-acbb1.firebasestorage.app",
  messagingSenderId: "486111783179",
  appId: "1:486111783179:web:2d62785bb6737ac2e8da0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);
//firebase login
//firebase init
//firebase deploy

