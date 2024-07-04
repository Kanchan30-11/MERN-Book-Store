// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC52XWAppHkaVLxhjPaJej4eri7i_Nw7HA",
  authDomain: "book-inventory-bbb4e.firebaseapp.com",
  projectId: "book-inventory-bbb4e",
  storageBucket: "book-inventory-bbb4e.appspot.com",
  messagingSenderId: "881058869867",
  appId: "1:881058869867:web:7b02e19b0acd51e328372e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;