import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyC2jP7R1RaoRChWgcjZn1ZXQVFt4IINHwI",
  authDomain: "tiktok---jornada-dev.firebaseapp.com",
  projectId: "tiktok---jornada-dev",
  storageBucket: "tiktok---jornada-dev.appspot.com",
  messagingSenderId: "358803446782",
  appId: "1:358803446782:web:b9a89fe1ba4d934aaefeaf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;