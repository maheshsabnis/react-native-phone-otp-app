// database/firebaseDb.js
//import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBimeTQh23UgM-UxwuERy2lmYfF70RDze0",
    authDomain: "expoauthnative.firebaseapp.com",
    databaseURL: "https://expoauthnative.firebaseapp.com",
    projectId: "expoauthnative",
    storageBucket: "expoauthnative.appspot.com",
    messagingSenderId: "668372233678",
    appId: "1:668372233678:web:d47035daff047f6c37cf9f"
};
// 1. Initialize the APplication based on Configuration
const app = initializeApp(firebaseConfig);
// 2. Set the Auth Process (Register, Login, and SignOut) for the current App
const firebase = getAuth(app);




// firebase.initializeApp(firebaseConfig);
export default firebase;