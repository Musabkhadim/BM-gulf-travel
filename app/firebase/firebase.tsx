// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDdojOtAwMekR6TMl3TGtivOkgmxbUVnCo",
  authDomain: "bloge-2272e.firebaseapp.com",
  projectId: "bloge-2272e",
  storageBucket: "bloge-2272e.firebasestorage.app",
  messagingSenderId: "831432305568",
  appId: "1:831432305568:web:dd7f50442065c939bb52c5",
  measurementId: "G-03N1CD7XYS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Analytics only on client
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
      console.log("Firebase Analytics enabled");
    } else {
      console.log("Firebase Analytics not supported in this environment");
    }
  });
}

export { app, db, analytics };
