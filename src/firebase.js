import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "sandbox-1b354.firebaseapp.com",
  projectId: "sandbox-1b354",
  storageBucket: "sandbox-1b354.appspot.com",
  messagingSenderId: "341455704622",
  appId: "1:341455704622:web:e84d192214c99a9ddec5bf",
};

// init firebase app
const app = initializeApp(firebaseConfig);

// init services from firebase (enkel een database in Firestore wordt gebruikt)
const db = getFirestore(app);

export { db };
