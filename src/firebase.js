import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiCwHS6IODeW--6IWQqWksMlg_7UfcmC8",
  authDomain: "voting-system-65981.firebaseapp.com",
  projectId: "voting-system-65981",
  storageBucket: "voting-system-65981.appspot.com",
  messagingSenderId: "692922292551",
  appId: "1:692922292551:web:ed1fc141d949325f185462"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore()