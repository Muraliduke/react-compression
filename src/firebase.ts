import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';
import "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiDUpSLV0wmSzsDLjKc6bA1kauGpLuHS4",
    authDomain: "koops-89148.firebaseapp.com",
    databaseURL: "https://koops-89148.firebaseio.com",
    projectId: "koops-89148",
    storageBucket: "koops-89148.appspot.com",
    messagingSenderId: "731477105637",
    appId: "1:731477105637:web:3c774c442d2e238112ed0c",
    measurementId: "G-HWLP01WZE8"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage().ref()