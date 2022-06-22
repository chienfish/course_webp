import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDtrvPio0DLESJTQPymv7ywRR7HpJEhd4I",
    authDomain: "webp-ccd8f.firebaseapp.com",
    projectId: "webp-ccd8f",
    storageBucket: "webp-ccd8f.appspot.com",
    messagingSenderId: "879473345920",
    appId: "1:879473345920:web:0826f64e09b355cd472d65",
    measurementId: "G-10LLL5N2YV"

});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };