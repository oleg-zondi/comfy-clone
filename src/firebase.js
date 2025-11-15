import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcP2xRrVa6w5Tmb0eYOwYHtw0joP2zijc",
  authDomain: "comfy-clone.firebaseapp.com",
  projectId: "comfy-clone",
  storageBucket: "comfy-clone.firebasestorage.app",
  messagingSenderId: "891937857992",
  appId: "1:891937857992:web:59429e0003b8fe3bcee0fd",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
