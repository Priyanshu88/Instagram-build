// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRJddSqU69v99JK3YCSYrvckYaYrCw5VI",
    authDomain: "insta-build-109d2.firebaseapp.com",
    projectId: "insta-build-109d2",
    storageBucket: "insta-build-109d2.appspot.com",
    messagingSenderId: "927920016487",
    appId: "1:927920016487:web:e47b45052c8de9a84118c2",
    measurementId: "G-28PVDKCY5X"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
const storage = getStorage();
const db = getFirestore();

export { app, db, storage };
