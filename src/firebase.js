import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD1zQXj5PAqdLad-oQ3OdlaVCtjl5RWhlY",
    authDomain: "joblisting-94b3e.firebaseapp.com",
    projectId: "joblisting-94b3e",
    storageBucket: "joblisting-94b3e.appspot.com",
    messagingSenderId: "583335008802",
    appId: "1:583335008802:web:1d0797df848aabd901887b",
    measurementId: "G-15SHF9PKQ6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth=getAuth(app);
  export const provider=new GoogleAuthProvider();
 

  export default app;

