// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApJLsKxTHbLabSRNOv9EIraVNQJ9QYq20",
  authDomain: "stackoverflow-a9d4b.firebaseapp.com",
  projectId: "StackOverflow-a9d4b",
  storageBucket: "StackOverflow-a9d4b.appspot.com",
  messagingSenderId: "903125397681",
  appId: "1:903125397681:web:b3a6f5b026abf356e93290",
  measurementId: "G-LX18ZQ3E6K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

// export { auth, provider };
