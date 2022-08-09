// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArReJ0Qs20P12536EIOyuN9QxAWV8ulbs",
  authDomain: "finder-7952b.firebaseapp.com",
  projectId: "finder-7952b",
  storageBucket: "finder-7952b.appspot.com",
  messagingSenderId: "590988338281",
  appId: "1:590988338281:web:520960edb91a7158ec6ef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();