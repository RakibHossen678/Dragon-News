// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLyw1IMXk7iwo5Il1eTXroSWA-Lzi0b9E",
  authDomain: "dragon-news-5bef9.firebaseapp.com",
  projectId: "dragon-news-5bef9",
  storageBucket: "dragon-news-5bef9.appspot.com",
  messagingSenderId: "935451179395",
  appId: "1:935451179395:web:b9bc3be44723bf6295deb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app