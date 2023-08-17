import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

//Your web app's firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwVH64kYmDhAN3L646vbneV-6HnArPkZM",
    authDomain: "todo-final-9d28e.firebaseapp.com",
    projectId: "todo-final-9d28e",
    storageBucket: "todo-final-9d28e.appspot.com",
    messagingSenderId: "746047425870",
    appId: "1:746047425870:web:89d2d20339d0cf02ad621f",
    measurementId: "G-3KPXL1K4YK"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };