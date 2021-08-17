import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC6KD8x1pW5Ub4dk8mITBlRxea1wyH40m0",
    authDomain: "crwn-db-8f6af.firebaseapp.com",
    projectId: "crwn-db-8f6af",
    storageBucket: "crwn-db-8f6af.appspot.com",
    messagingSenderId: "31473929801",
    appId: "1:31473929801:web:e652f8cd5258d3e57c7998",
    measurementId: "G-KS7C2JWSEC"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;