// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: 'AIzaSyAsojE1KwUxyqI0bMdQB31VuoLjx4tQI3E',
  authDomain: 'e-learning-66625.firebaseapp.com',
  databaseURL: 'https://e-learning-66625-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'e-learning-66625',
  storageBucket: 'e-learning-66625.firebasestorage.app',
  messagingSenderId: '381935325223',
  appId: '1:381935325223:web:f66eccddfb39e5cfe9fe02',
  measurementId: 'G-3L4Z41PDEM',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
