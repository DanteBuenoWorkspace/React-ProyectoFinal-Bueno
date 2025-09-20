import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2NVN_yfoR45IioB4olysK-NNs-2qbNRQ",
  authDomain: "react-proyectofinal-bueno.firebaseapp.com",
  projectId: "react-proyectofinal-bueno",
  storageBucket: "react-proyectofinal-bueno.appspot.com",
  messagingSenderId: "469908000997",
  appId: "1:469908000997:web:01e178ab362936d657840c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
