// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqOM7qw0nnspFGoCc1lwu-VVgS_-mDr4U",
    authDomain: "hiplando-9b08c.firebaseapp.com",
    projectId: "hiplando-9b08c",
    storageBucket: "hiplando-9b08c.firebasestorage.app",
    messagingSenderId: "204124619671",
    appId: "1:204124619671:web:b6022684b83de72a2ebad2",
    measurementId: "G-YELSZ0HFSH"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const storage = getStorage(app);