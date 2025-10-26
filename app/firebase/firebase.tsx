// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdojOtAwMekR6TMl3TGtivOkgmxbUVnCo",
  authDomain: "bloge-2272e.firebaseapp.com",
  projectId: "bloge-2272e",
  storageBucket: "bloge-2272e.firebasestorage.app",
  messagingSenderId: "831432305568",
  appId: "1:831432305568:web:dd7f50442065c939bb52c5",
  measurementId: "G-03N1CD7XYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Export the instances for use in other files
export { app, db, analytics };