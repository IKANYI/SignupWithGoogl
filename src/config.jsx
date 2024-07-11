// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider ,} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4M9YGYwZGwHfiDoqC3-F14qc6P9P0HX8",
  authDomain: "sign-in-f204b.firebaseapp.com",
  projectId: "sign-in-f204b",
  storageBucket: "sign-in-f204b.appspot.com",
  messagingSenderId: "320098078211",
  appId: "1:320098078211:web:e86af9cb92f3e5a4d3c836"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider,}