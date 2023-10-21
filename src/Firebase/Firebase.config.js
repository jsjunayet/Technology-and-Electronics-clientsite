// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDcEwCKlpGgpxO672d3CabQQUzEwFsDTY",
  authDomain: "new-project-f2f29.firebaseapp.com",
  projectId: "new-project-f2f29",
  storageBucket: "new-project-f2f29.appspot.com",
  messagingSenderId: "1094451167535",
  appId: "1:1094451167535:web:5b7ca8de8fe19100dfa1da"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);