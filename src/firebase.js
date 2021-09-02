import firebase from "firebase/compat";
import "firebase/auth"
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const app = firebase.initializeApp({
    apiKey: 'AIzaSyABNJWwL1ad1rR0h_pvEsiZqhEFZpbPyQs',
    authDomain: 'auth-login-9e5b5.firebaseapp.com',
    databaseURL: "https://auth-login-9e5b5.firebaseio.com",
    projectId: 'auth-login-9e5b5',
    storageBucket: 'auth-login-9e5b5.appspot.com',
    messagingSenderId: '876445926098',
    appId: '1:876445926098:web:65958592691fe97825230b'
})

export const auth = app.auth(app)