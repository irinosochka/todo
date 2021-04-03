import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyAU4gQO_eX9qDLfTaQ9FHblLPJJtxw3DEU",
    authDomain: "react-todo-list-5320e.firebaseapp.com",
    projectId: "react-todo-list-5320e",
    storageBucket: "react-todo-list-5320e.appspot.com",
    messagingSenderId: "997388106077",
    appId: "1:997388106077:web:119e4bf6b9d8adc78090b4"
});

const db = firebase.firestore();

export {  db };