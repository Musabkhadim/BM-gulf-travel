// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyDdojOtAwMekR6TMl3TGtivOkgmxbUVnCo",
  authDomain: "bloge-2272e.firebaseapp.com",
  projectId: "bloge-2272e",
  storageBucket: "bloge-2272e.firebasestorage.app",
  messagingSenderId: "831432305568",
  appId: "1:831432305568:web:dd7f50442065c939bb52c5",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
