import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDxHBfVa5c4fk9y0Uwm1nUQFrwm7_ztqbQ",
    authDomain: "letmeask-6ad41.firebaseapp.com",
    databaseURL: "https://letmeask-6ad41-default-rtdb.firebaseio.com",
    projectId: "letmeask-6ad41",
    storageBucket: "letmeask-6ad41.appspot.com",
    messagingSenderId: "361506940745",
    appId: "1:361506940745:web:55e1f96647dd518fce1c98"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const database = firebase.database();