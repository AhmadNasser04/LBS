// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL98PvGIqIGhRJqpFs7Sg6GUxtHDDeeYE",
  authDomain: "lebanese-bioinformatics.firebaseapp.com",
  projectId: "lebanese-bioinformatics",
  storageBucket: "lebanese-bioinformatics.appspot.com",
  messagingSenderId: "327957837932",
  appId: "1:327957837932:web:f278b4627b1a0813638049",
  measurementId: "G-ZX5F57CZLF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
