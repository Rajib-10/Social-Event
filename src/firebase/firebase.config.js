// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAddoj7b3LfPDGDvsip82XvrKWVc8lUZ8I",
  authDomain: "social-event-65ec2.firebaseapp.com",
  projectId: "social-event-65ec2",
  storageBucket: "social-event-65ec2.appspot.com",
  messagingSenderId: "120240866885",
  appId: "1:120240866885:web:616e57db72799bc3b5052c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;