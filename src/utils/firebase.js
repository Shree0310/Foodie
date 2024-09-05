import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoRdbhwAneQ8oe9pNmJflqVPDKOozhX28",
  authDomain: "foodie-f3c57.firebaseapp.com",
  projectId: "foodie-f3c57",
  storageBucket: "foodie-f3c57.appspot.com",
  messagingSenderId: "901388366285",
  appId: "1:901388366285:web:f3773849a58f9af7bf9484",
  measurementId: "G-PPSR78QPTZ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//export const auth = getAuth(app);
const analytics = getAnalytics(app);