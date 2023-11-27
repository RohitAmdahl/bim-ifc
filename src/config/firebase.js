// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB0RSQ32nVhrB9Rsvv8wvgFMzEDkvg3xwo",
  authDomain: "vision-68f07.firebaseapp.com",
  projectId: "vision-68f07",
  storageBucket: "vision-68f07.appspot.com",
  messagingSenderId: "798238250127",
  appId: "1:798238250127:web:f380875c557cbe0b09ccfa",
  measurementId: "G-HCPCXZY3DE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
