// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-78442.firebaseapp.com",
  projectId: "x-next-78442",
  storageBucket: "x-next-78442.appspot.com",
  messagingSenderId: "629531395218",
  appId: "1:629531395218:web:aa35ae573d658255b5524b",
  measurementId: "G-QJ99H3B74Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);