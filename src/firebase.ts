// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT8LejxkIj5ztE0yXCUBsEvbJRR4LWfxQ",
  authDomain: "louis-lachance.firebaseapp.com",
  projectId: "louis-lachance",
  storageBucket: "louis-lachance.appspot.com",
  messagingSenderId: "735565040818",
  appId: "1:735565040818:web:a1b0d67f0a61b38aa60dab",
  measurementId: "G-LSP06BMHXN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
