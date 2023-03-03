// database/firebaseDb.js
//import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    messagingSenderId: "00000000000000000000000",
    appId: "1:00000000000000:web:d647849993939393"
};
// 1. Initialize the APplication based on Configuration
const app = initializeApp(firebaseConfig);
// 2. Set the Auth Process (Register, Login, and SignOut) for the current App
const firebase = getAuth(app);




// firebase.initializeApp(firebaseConfig);
export default firebase;
