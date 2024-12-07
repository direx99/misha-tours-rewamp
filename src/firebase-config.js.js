// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAH6ag4itBExKrgvEU68xti9CvNVCkf2ro",
  authDomain: "misha-tours.firebaseapp.com",
  projectId: "misha-tours",
  storageBucket: "misha-tours.firebasestorage.app",
  messagingSenderId: "318351896945",
  appId: "1:318351896945:web:667c0d0e0cfc19a90c06d0",
  measurementId: "G-XXJ41E4QXV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
