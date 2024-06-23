// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, EmailAuthProvider, GithubAuthProvider, TwitterAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwwo3GhYHGDn-i_nUHPDEEOHKL0MVVH4U",
  authDomain: "olympus-web-platform.firebaseapp.com",
  projectId: "olympus-web-platform",
  storageBucket: "olympus-web-platform.appspot.com",
  messagingSenderId: "283910939009",
  appId: "1:283910939009:web:b9e492dbc1269290f10880",
  measurementId: "G-5MF9DK9JV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Inicializa el proveedor de autenticación de Google
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const emailProvider = new EmailAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export {
  auth,
  googleProvider,
  facebookProvider,
  emailProvider,
  githubProvider,
  twitterProvider
};
