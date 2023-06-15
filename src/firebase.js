// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt2jcptLhm6JwqegTfzAmJM0XMLWEUZ6M",
  authDomain: "react-disney-plus-app-d21d6.firebaseapp.com",
  projectId: "react-disney-plus-app-d21d6",
  storageBucket: "react-disney-plus-app-d21d6.appspot.com",
  messagingSenderId: "476280571698",
  appId: "1:476280571698:web:79830d394dd8671779f92b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;