// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx9u6REFmINTcILjjQjN_osN6GX2T6itw",
  authDomain: "form-17-oder-food.firebaseapp.com",
  databaseURL:
    "https://form-17-oder-food-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "form-17-oder-food",
  storageBucket: "form-17-oder-food.appspot.com",
  messagingSenderId: "659340596013",
  appId: "1:659340596013:web:47ef6787417cce1a64b9a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
