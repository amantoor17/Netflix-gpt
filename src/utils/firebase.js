// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEWNm_uDDaWWxvlAv6ZGC6UfvnizIVlX0",
  authDomain: "netflixgpt-44829.firebaseapp.com",
  projectId: "netflixgpt-44829",
  storageBucket: "netflixgpt-44829.firebasestorage.app",
  messagingSenderId: "413381498166",
  appId: "1:413381498166:web:53300898655835473acf97",
  measurementId: "G-1WT69THLB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();