// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5sI8zVT3R3Hg_s2tqGyu6T3L45YDWqKs",
  authDomain: "tecnaplast-a1cd6.firebaseapp.com",
  projectId: "tecnaplast-a1cd6",
  storageBucket: "tecnaplast-a1cd6.appspot.com",
  messagingSenderId: "1021246803846",
  appId: "1:1021246803846:web:b58b47fb50251347d9e607"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export default db