// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoqF8oznzEyGJ5saf59Y_b5pkaow-hxy8",
  authDomain: "genius-car-services-81c79.firebaseapp.com",
  projectId: "genius-car-services-81c79",
  storageBucket: "genius-car-services-81c79.appspot.com",
  messagingSenderId: "537988647948",
  appId: "1:537988647948:web:ad148f81d3615c1bdc3229"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;