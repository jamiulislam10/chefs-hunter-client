// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqK7FAi1yVZ6UNvQSyVV2ZpECou_NB5fk",
  authDomain: "chefs-hunter.firebaseapp.com",
  projectId: "chefs-hunter",
  storageBucket: "chefs-hunter.appspot.com",
  messagingSenderId: "788030089535",
  appId: "1:788030089535:web:1692b660d8fa9703480b8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;