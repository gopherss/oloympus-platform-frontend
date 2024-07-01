// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth, GoogleAuthProvider,
  FacebookAuthProvider, TwitterAuthProvider
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0IITF5ln2x1Fy_BvDVLNaRGGATeKmKYI",
  authDomain: "olympus-platform.firebaseapp.com",
  projectId: "olympus-platform",
  storageBucket: "olympus-platform.appspot.com",
  messagingSenderId: "566841895425",
  appId: "1:566841895425:web:23d58b0367eb4e04b6ae00",
  measurementId: "G-RKY82C0VXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Inicializa el proveedor de autenticación de Google
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider
};
