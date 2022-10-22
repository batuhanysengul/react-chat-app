import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyD3TgIhfBRmie9Ggl8OifXAZRQb81w6xGA",
  authDomain: "chatapp-db86d.firebaseapp.com",
  projectId: "chatapp-db86d",
  storageBucket: "chatapp-db86d.appspot.com",
  messagingSenderId: "445919880432",
  appId: "1:445919880432:web:482b2c596b55b7f96d8e35",
  measurementId: "G-JJGWW5F999",
};

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }