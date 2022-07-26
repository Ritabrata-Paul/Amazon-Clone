import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDpQxreG4ptdwVwYsLLbqloLJQ3BSqsPeM",
  authDomain: "clone-e24da.firebaseapp.com",
  projectId: "clone-e24da",
  storageBucket: "clone-e24da.appspot.com",
  messagingSenderId: "736161088430",
  appId: "1:736161088430:web:b22ed8953044f5b6107e3f",
  measurementId: "G-JV6K9NG167"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };