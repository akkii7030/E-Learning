import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwHzA1XRpNjTTHdfRRuf3NHsmEqUco6eA",
  authDomain: "e-learn-17497.firebaseapp.com",
  projectId: "e-learn-17497",
  storageBucket: "e-learn-17497.appspot.com",
  messagingSenderId: "184796669664",
  appId: "1:184796669664:web:4466fb6b272112c3b95285",
};

// ✅ Check if Firebase is already initialized
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
