import Vue from 'vue';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBEYy8DQHthRZpVVyZpwwrE1qf0QFScABY",
    authDomain: "wxwork-331206.firebaseapp.com",
    databaseURL: "https://wxwork-331206-default-rtdb.firebaseio.com",
    projectId: "wxwork-331206",
    storageBucket: "wxwork-331206.appspot.com",
    messagingSenderId: "674055370324",
    appId: "1:674055370324:web:cd5bdb9854a30a0fb35fc1",
    measurementId: "G-V9FTB56RP0"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log(app);
console.log(db);

Vue.prototype.$firebase = app;
Vue.prototype.$firebasedb = db;