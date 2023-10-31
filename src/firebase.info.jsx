// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyB3TYBwQvMRt-KBqOhYaFhIGMbKQ1B6M",
  authDomain: "car-doctor-bda17.firebaseapp.com",
  projectId: "car-doctor-bda17",
  storageBucket: "car-doctor-bda17.appspot.com",
  messagingSenderId: "1059218357030",
  appId: "1:1059218357030:web:0bf7443ce3903367a51fe7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app