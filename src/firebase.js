
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC98MPQ_W4ASxKOB32pgO8AIUCSHXrx-Ro",
  authDomain: "pproducts-73ed7.firebaseapp.com",
  projectId: "pproducts-73ed7",
  storageBucket: "pproducts-73ed7.firebasestorage.app",
  messagingSenderId: "453599221817",
  appId: "1:453599221817:web:f1f997a30f969e586d55e8",
  databaseURL: "https://pproducts-73ed7-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)
