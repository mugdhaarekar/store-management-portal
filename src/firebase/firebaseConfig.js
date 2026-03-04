import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAx5Po9CV7cyPeu7yMDtvktY_2e2kJdCw",
  authDomain: "store-management-portal.firebaseapp.com",
  projectId: "store-management-portal",
  storageBucket: "store-management-portal.firebasestorage.app",
  messagingSenderId: "831532811262",
  appId: "1:831532811262:web:7d2a4819c4d9bc9da7b6af",
  measurementId: "G-KGMFXY9KLM"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();