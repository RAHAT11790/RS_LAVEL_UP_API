import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, push, set, remove, update, query, orderByChild, equalTo, get, runTransaction } from "firebase/database";
import { getAuth, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, confirmPasswordReset, updatePassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIMMW8WMG8b_lAJfEcY0tpT9JnipyL3mc",
  authDomain: "rs-anime-web.firebaseapp.com",
  databaseURL: "https://rs-anime-web-default-rtdb.firebaseio.com",
  projectId: "rs-anime-web",
  storageBucket: "rs-anime-web.firebasestorage.app",
  messagingSenderId: "856791666296",
  appId: "1:856791666296:web:9b769ba6d774734e0ce78d",
  measurementId: "G-37EDC2228V"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export { ref, onValue, push, set, remove, update, query, orderByChild, equalTo, get, runTransaction, signInWithEmailAndPassword, signOut, signInWithPopup, sendPasswordResetEmail, confirmPasswordReset, updatePassword };
